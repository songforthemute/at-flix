import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { InterfaceSearch, searchProgram } from "../../../apis/searchApi";
import { getImagePath, isNotMobile } from "../../../libs/libs";
import { Container, Result, Results, resultVariants } from "./style";

export default function Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");

    const { data, isLoading } = useQuery<InterfaceSearch>(
        ["search", `${keyword}`],
        () => searchProgram(keyword!)
    );

    const navigate = useNavigate();
    const onClickResult = (type: string, id: number) => {
        navigate(`${process.env.PUBLIC_URL}/search/${type}/${id}`);
    };

    return (
        <Container>
            {isLoading ? (
                "Loading..."
            ) : (
                <>
                    <Results isMobile={isNotMobile()}>
                        {data?.results.map(
                            (d) =>
                                d.media_type !== "person" && (
                                    <Result
                                        key={d.id}
                                        onClick={() =>
                                            onClickResult(d.media_type, d.id)
                                        }
                                        variants={resultVariants}
                                        initial="initial"
                                        whileHover="animate"
                                    >
                                        <img
                                            src={getImagePath(
                                                d.poster_path ||
                                                    d.backdrop_path,
                                                "w200"
                                            )}
                                            alt={d.original_name}
                                        />
                                        <span>{d.title || d.name}</span>
                                    </Result>
                                )
                        )}
                    </Results>
                </>
            )}
        </Container>
    );
}
