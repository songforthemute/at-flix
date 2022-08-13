import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import { getDetail, InterfaceGetResult } from "../../../apis/api";
import { getImagePath } from "../../../libs";
import { Genre, Genres, Votes } from "../../atoms/Modal/style";
import { Container, Dating, Overview, Title, Wrapper } from "./style";

export default function Detail() {
    const match = useMatch("/search/:type/:id");

    const { data, isLoading } = useQuery<InterfaceGetResult>(
        ["search", `${match?.params.id}`],
        () => getDetail(match?.params.type!, Number(match?.params.id))
    );

    return (
        <>
            {isLoading ? (
                "Loading..."
            ) : (
                <Wrapper
                    bg={getImagePath(data?.backdrop_path! || "", "original")}
                >
                    <Container>
                        <img
                            src={getImagePath(
                                data?.poster_path! || data?.backdrop_path!,
                                "w500"
                            )}
                            alt=""
                        />
                    </Container>
                    <Container>
                        <Title>{data?.title || data?.name}</Title>
                        <Dating>
                            Release :{" "}
                            {data?.release_date || data?.first_air_date}
                        </Dating>
                        <Genres>
                            Genres :
                            {data?.genres.map((g) => (
                                <Genre key={g.id}>{g.name}</Genre>
                            ))}
                        </Genres>
                        <div>
                            Score : <Votes>{data?.vote_average!} / 10.00</Votes>
                        </div>
                        <Overview>{data?.overview}</Overview>
                    </Container>
                </Wrapper>
            )}
        </>
    );
}
