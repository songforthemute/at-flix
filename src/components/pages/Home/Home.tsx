import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import {
    getNowPlayingMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    InterfaceGetMovies,
} from "../../../apis/movieApi";
import { getImagePath } from "../../../libs/libs";

import Modal from "../../atoms/Modal/Modal";
import Slider from "../../atoms/Slider/Slider";
import { Banner, Loading, Overview, Title, Wrapper } from "./style";

export default function Home() {
    // React-query
    const { data: nowPlaying, isLoading: isLoadingNowPlaying } =
        useQuery<InterfaceGetMovies>(
            ["movies", "nowPlaying"],
            getNowPlayingMovies
        );
    const { data: topRated, isLoading: isLoadingTopRated } =
        useQuery<InterfaceGetMovies>(["movies", "topRated"], getTopRatedMovies);

    const { data: upcoming, isLoading: isLoadingUpcoming } =
        useQuery<InterfaceGetMovies>(["movies", "upcoming"], getUpcomingMovies);

    // useMatch
    const clickedNowPlayingMatch = useMatch(
        `${process.env.PUBLIC_URL}/movie/:movieId`
    );
    const clickedNowPlaying = clickedNowPlayingMatch?.params.movieId
        ? nowPlaying?.results.find(
              (v) => v.id.toString() === clickedNowPlayingMatch.params.movieId
          )
        : undefined;
    const clickedTopRated = clickedNowPlayingMatch?.params.movieId
        ? topRated?.results.find(
              (v) => v.id.toString() === clickedNowPlayingMatch.params.movieId
          )
        : undefined;
    const clickedUpcoming = clickedNowPlayingMatch?.params.movieId
        ? upcoming?.results.find(
              (v) => v.id.toString() === clickedNowPlayingMatch.params.movieId
          )
        : undefined;

    const { scrollY } = useScroll();

    const navigate = useNavigate();
    const moveToBanner = (movieId: string) => {
        navigate(`${process.env.PUBLIC_URL}/movie/${movieId}`);
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

                    {/* Slider */}
                    <Slider
                        movieData={nowPlaying?.results.slice(1)!}
                        sliderTitle="Now Playing"
                        type="movie"
                    />
                    {!isLoadingTopRated && (
                        <Slider
                            movieData={topRated?.results!}
                            sliderTitle="Top Rated"
                            type="movie"
                        />
                    )}
                    {!isLoadingUpcoming && (
                        <Slider
                            movieData={upcoming?.results!}
                            sliderTitle="Upcoming"
                            type="movie"
                        />
                    )}

                    {/* Modal from */}
                    <AnimatePresence>
                        {clickedNowPlayingMatch && (
                            <Modal
                                movieData={
                                    clickedNowPlaying ||
                                    clickedTopRated ||
                                    clickedUpcoming
                                }
                                scrolly={scrollY.get()}
                                programId={
                                    clickedNowPlayingMatch.params.movieId!
                                }
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </Wrapper>
    );
}
