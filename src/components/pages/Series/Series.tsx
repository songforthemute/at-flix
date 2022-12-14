import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import {
    getOnTheAirSeries,
    // getPopularSeries,
    getTopRatedSeries,
    InterfaceGetSeries,
} from "../../../apis/seriesApi";
import { getImagePath } from "../../../libs/libs";
import Modal from "../../atoms/Modal/Modal";
import Slider from "../../atoms/Slider/Slider";
import { Banner, Loading, Overview, Title, Wrapper } from "../Home/style";

export default function Series() {
    // React-query
    const { data: onTheAir, isLoading: isLoadingOnTheAir } =
        useQuery<InterfaceGetSeries>(["series", "onTheAir"], getOnTheAirSeries);
    const { data: topRated, isLoading: isLoadingTopRated } =
        useQuery<InterfaceGetSeries>(["series", "topRated"], getTopRatedSeries);
    // const { data: popular, isLoading: isLoadingPopular } =
    //     useQuery<InterfaceGetSeries>(["series", "popular"], getPopularSeries);

    // useMatch for Modal
    const clickedSeriesMatch = useMatch(`/series/:seriesId`);
    const clickedOnTheAir = clickedSeriesMatch?.params.seriesId
        ? onTheAir?.results.find(
              (v) => v.id.toString() === clickedSeriesMatch.params.seriesId
          )
        : undefined;
    const clickedTopRated = clickedSeriesMatch?.params.seriesId
        ? topRated?.results.find(
              (v) => v.id.toString() === clickedSeriesMatch.params.seriesId
          )
        : undefined;
    // const clickedPopular = clickedSeriesMatch?.params.seriesId
    //     ? popular?.results.find(
    //           (v) => v.id.toString() === clickedSeriesMatch.params.seriesId
    //       )
    //     : undefined;

    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const moveToBanner = (seriesId: string) => {
        navigate(`/series/${seriesId}`);
    };

    return (
        <Wrapper>
            {isLoadingOnTheAir ? (
                <Loading>Loading...</Loading>
            ) : (
                <>
                    <Banner
                        onClick={() =>
                            moveToBanner(onTheAir?.results[0].id.toString()!)
                        }
                        bg={getImagePath(
                            onTheAir?.results[0].backdrop_path || ""
                        )}
                    >
                        <Title>{onTheAir?.results[0].name}</Title>
                        <Overview>{onTheAir?.results[0].overview}</Overview>
                    </Banner>

                    {/* Slider */}
                    {/* {!isLoadingPopular && (
                        <Slider
                            seriesData={popular?.results}
                            sliderTitle="Popular"
                            type="series"
                        />
                        )} */}
                    {!isLoadingOnTheAir && (
                        <Slider
                            seriesData={onTheAir?.results.slice(1)}
                            sliderTitle="On Air Series"
                            type="series"
                        />
                    )}
                    {!isLoadingTopRated && (
                        <Slider
                            seriesData={topRated?.results}
                            sliderTitle="Top Rated"
                            type="series"
                        />
                    )}

                    {/* Modal Form */}
                    <AnimatePresence>
                        {clickedSeriesMatch && (
                            <Modal
                                seriesData={
                                    clickedOnTheAir || clickedTopRated
                                    // || clickedPopular
                                }
                                scrolly={scrollY.get()}
                                programId={clickedSeriesMatch.params.seriesId!}
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </Wrapper>
    );
}
