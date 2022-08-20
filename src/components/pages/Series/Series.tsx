import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { getOnTheAirSeries, InterfaceGetSeries } from "../../../apis/api";
import { getImagePath } from "../../../libs";
import Modal from "../../atoms/Modal/Modal";
import Slider from "../../atoms/Slider/Slider";
import { Banner, Loading, Overview, Title, Wrapper } from "../Home/style";

export default function Series() {
    const { data: onTheAir, isLoading: isLoadingSeries } =
        useQuery<InterfaceGetSeries>(["series", "onTheAir"], getOnTheAirSeries);

    const clickedSeriesMatch = useMatch("/series/:seriesId");
    const clickedSeries = clickedSeriesMatch?.params.seriesId
        ? onTheAir?.results.find(
              (v) => v.id.toString() === clickedSeriesMatch.params.seriesId
          )
        : undefined;

    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const moveToBanner = (seriesId: string) => {
        navigate(`/series/${seriesId}`);
    };

    return (
        <Wrapper>
            {isLoadingSeries ? (
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
                    {!isLoadingSeries && (
                        <Slider
                            seriesData={onTheAir?.results.slice(1)}
                            sliderTitle="On Air Series"
                            type="series"
                        />
                    )}

                    {/* Modal Form */}
                    <AnimatePresence>
                        {clickedSeriesMatch && (
                            <Modal
                                seriesData={clickedSeries}
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
