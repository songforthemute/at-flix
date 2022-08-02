import { useQuery } from "@tanstack/react-query";
import { getImagePath } from "../../../libs";
import { getMovies, InterfaceGetMovies } from "../../../server/api";
import Slider from "../../atoms/Slider/Slider";
import { Banner, Loading, Overview, Title, Wrapper } from "./style";

function Home() {
    const { data, isLoading } = useQuery<InterfaceGetMovies>(
        ["movies", "nowPlaying"],
        getMovies
    );

    // console.log(data, isLoading);

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
                    <Slider data={data?.results.slice(1)!} />
                </>
            )}
        </Wrapper>
    );
}

export default Home;
