import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImagePath, isNotMobile, programTypes } from "../../../libs";
import { InterfaceMovie, InterfaceSeries } from "../../../apis/api";
import {
    Button,
    Detail,
    detailVariants,
    Item,
    itemVariants,
    Row,
    RowTitle,
    rowVariants,
    Wrapper,
} from "./style";

interface InterfaceSliderProps {
    movieData?: InterfaceMovie[];
    seriesData?: InterfaceSeries[];
    sliderTitle: string;
    type: programTypes;
}

export default function Slider({
    movieData,
    seriesData,
    sliderTitle,
    type,
}: InterfaceSliderProps) {
    const [idx, setIdx] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [isStraight, setIsStraight] = useState(true);

    const offset = isNotMobile() ? 6 : 4;
    const maxIdx = Math.ceil((movieData || seriesData)!.length / offset) - 1;

    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onIncreaseIdx = () => {
        if (leaving) return;

        setIsStraight(true);
        toggleLeaving();
        setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
    };

    const onDecreaseIdx = () => {
        if (leaving) return;

        setIsStraight(false);
        toggleLeaving();
        setIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
    };

    const navigate = useNavigate();
    const onClickItem = (movieId: number) => {
        navigate(`/${type}/${movieId}`);
    };

    return (
        <Wrapper>
            <Button
                className="material-symbols-outlined"
                onClick={onDecreaseIdx}
                left="0px"
            >
                arrow_left
            </Button>
            <Button
                className="material-symbols-outlined"
                onClick={onIncreaseIdx}
                right="0px"
            >
                arrow_right
            </Button>
            <RowTitle>{sliderTitle}</RowTitle>
            <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
                <Row
                    offset={offset}
                    custom={isStraight}
                    variants={rowVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={idx}
                >
                    {movieData
                        ? // 무비 데이터 케이스
                          movieData
                              .slice(offset * idx, offset * (idx + 1))
                              .map((movie) => (
                                  <Item
                                      layoutId={movie.id.toString()}
                                      onClick={() => onClickItem(movie.id)}
                                      key={movie.id}
                                      variants={itemVariants}
                                      initial="initial"
                                      whileHover="hover"
                                  >
                                      <img
                                          src={getImagePath(
                                              movie.poster_path ||
                                                  movie.backdrop_path,
                                              "w500"
                                          )}
                                          alt={movie.title}
                                      />
                                      <Detail variants={detailVariants}>
                                          <h3>{movie.title}</h3>
                                      </Detail>
                                  </Item>
                              ))
                        : // 시리즈 데이터 케이스
                          seriesData!
                              .slice(offset * idx, offset * (idx + 1))
                              .map((movie) => (
                                  <Item
                                      layoutId={movie.id.toString()}
                                      onClick={() => onClickItem(movie.id)}
                                      key={movie.id}
                                      variants={itemVariants}
                                      initial="initial"
                                      whileHover="hover"
                                  >
                                      <img
                                          src={getImagePath(
                                              movie.poster_path ||
                                                  movie.backdrop_path,
                                              "w500"
                                          )}
                                          alt={movie.name}
                                      />
                                      <Detail variants={detailVariants}>
                                          <h3>{movie.name}</h3>
                                      </Detail>
                                  </Item>
                              ))}
                </Row>
            </AnimatePresence>
        </Wrapper>
    );
}
