import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { getImagePath } from "../../../libs";
import {
    getNowPlayingMovies,
    getOnTheAirSeries,
    getUpcomingMovies,
    InterfaceGetMovies,
} from "../../../apis/api";
import Modal from "../../atoms/Modal/Modal";
import Slider from "../../atoms/Slider/Slider";
import { Banner, Loading, Overview, Title, Wrapper } from "./style";

export default function Home() {
    const { data: nowPlaying, isLoading: isLoadingNowPlaying } =
        useQuery<InterfaceGetMovies>(
            ["movies", "nowPlaying"],
            getNowPlayingMovies
        );
    const { data: upcoming, isLoading: isLoadingUpcoming } =
        useQuery<InterfaceGetMovies>(["movies", "upcoming"], getUpcomingMovies);
    const { data: series, isLoading: isLoadingSeries } =
        useQuery<InterfaceGetMovies>(["series", "onTheAir"], getOnTheAirSeries);

    const clickedNowPlayingMatch = useMatch("/movie/:movieId");
    const clickedNowPlaying = clickedNowPlayingMatch?.params.movieId
        ? nowPlaying?.results.find(
              (v) => v.id.toString() === clickedNowPlayingMatch.params.movieId
          )
        : undefined;

    const clickedUpcoming = clickedNowPlayingMatch?.params.movieId
        ? upcoming?.results.find(
              (v) => v.id.toString() === clickedNowPlayingMatch.params.movieId
          )
        : undefined;

    const clickedSeriesMatch = useMatch("/series/:seriesId");
    const clickedSeries = clickedSeriesMatch?.params.seriesId
        ? series?.results.find(
              (v) => v.id.toString() === clickedSeriesMatch.params.seriesId
          )
        : undefined;

    const { scrollY } = useScroll();

    const navigate = useNavigate();
    const moveToBanner = (movieId: string) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <Wrapper>
            {isLoadingNowPlaying ? (
                <Loading>Loading...</Loading>
            ) : (
                <>
                    <Banner
                        onClick={() =>
                            moveToBanner(nowPlaying?.results[0].id.toString()!)
                        }
                        bg={getImagePath(
                            nowPlaying?.results[0].backdrop_path || ""
                        )}
                    >
                        <Title>{nowPlaying?.results[0].title}</Title>
                        <Overview>{nowPlaying?.results[0].overview}</Overview>
                    </Banner>
                    <Slider
                        data={nowPlaying?.results.slice(1)!}
                        sliderTitle="Now Playing"
                        type="movie"
                    />

                    {!isLoadingUpcoming && (
                        <Slider
                            data={upcoming?.results!}
                            sliderTitle="Upcoming"
                            type="movie"
                        />
                    )}
                    {!isLoadingSeries && (
                        <Slider
                            data={series?.results!}
                            sliderTitle="On Air Series"
                            type="series"
                        />
                    )}
                    <AnimatePresence>
                        {clickedNowPlayingMatch && (
                            <Modal
                                data={clickedNowPlaying || clickedUpcoming}
                                scrolly={scrollY.get()}
                                movidId={clickedNowPlayingMatch.params.movieId!}
                            />
                        )}
                        {clickedSeriesMatch && (
                            <Modal
                                data={clickedSeries}
                                scrolly={scrollY.get()}
                                movidId={clickedSeriesMatch.params.seriesId!}
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </Wrapper>
    );
}
