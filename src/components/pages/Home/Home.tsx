import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch } from "react-router-dom";
import { getImagePath } from "../../../libs";
import { getMovies, InterfaceGetMovies } from "../../../server/api";
import Modal from "../../atoms/Modal/Modal";
import Slider from "../../atoms/Slider/Slider";
import { Banner, Loading, Overview, Title, Wrapper } from "./style";

export default function Home() {
    const { data, isLoading } = useQuery<InterfaceGetMovies>(
        ["movies", "nowPlaying"],
        getMovies
    );

    const clickedProgramMatch = useMatch("/program/:programId");
    const clickedProgram = clickedProgramMatch?.params.programId
        ? data?.results.find(
              (v) => v.id.toString() === clickedProgramMatch.params.programId
          )
        : undefined;

    const { scrollY } = useScroll();

    return (
        <Wrapper>
            {isLoading ? (
                <Loading>Loading...</Loading>
            ) : (
                <>
                    <Banner
                        bg={getImagePath(data?.results[0].backdrop_path || "")}
                    >
                        <Title>{data?.results[0].title}</Title>
                        <Overview>{data?.results[0].overview}</Overview>
                    </Banner>
                    <Slider
                        data={data?.results.slice(1)!}
                        sliderTitle="Now Playing"
                    />
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
