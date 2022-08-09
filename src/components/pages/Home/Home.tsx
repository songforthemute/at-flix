import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { getImagePath } from "../../../libs";
import {
    getNowPlayingMovies,
    getPopularMovies,
    getUpcomingMovies,
    InterfaceGetMovies,
} from "../../../apis/api";
import Modal from "../../atoms/Modal/Modal";
import Slider from "../../atoms/Slider/Slider";
import { Banner, Loading, Overview, Title, Wrapper } from "./style";
import { useRecoilValue } from "recoil";
import { modalInfoState } from "../../../states/atoms";

export default function Home() {
    const { data: nowPlaying, isLoading: isLoadingNowPlaying } =
        useQuery<InterfaceGetMovies>(
            ["movies", "nowPlaying"],
            getNowPlayingMovies
        );
    const { data: popular, isLoading: isLoadingPopular } =
        useQuery<InterfaceGetMovies>(["movies", "popular"], getPopularMovies);
    const { data: upcoming, isLoading: isLoadingUpcoming } =
        useQuery<InterfaceGetMovies>(["movies", "upcoming"], getUpcomingMovies);

    const modalInfo = useRecoilValue(modalInfoState);

    const clickedMovieMatch = useMatch("/movie/:movieId");
    const clickedMovie = clickedMovieMatch?.params.movieId
        ? modalInfo.data.find(
              (v) => v.id.toString() === clickedMovieMatch.params.movieId
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
                    />
                    {!isLoadingPopular && (
                        <Slider
                            data={popular?.results!}
                            sliderTitle="Popular"
                        />
                    )}

                    {!isLoadingUpcoming && (
                        <Slider
                            data={upcoming?.results!}
                            sliderTitle="Upcoming"
                        />
                    )}
                    <AnimatePresence>
                        {clickedMovieMatch && (
                            <Modal
                                data={clickedMovie}
                                scrolly={scrollY.get()}
                                movidId={clickedMovieMatch.params.movieId!}
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </Wrapper>
    );
}
