import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/atoms/Header/Header";
import Home from "./components/pages/Home/Home";
import Series from "./components/pages/Series/Series";
import Search from "./components/pages/Search/Search";
import Detail from "./components/pages/Detail/Detail";
import Footer from "./components/atoms/Footer/Footer";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path={`${process.env.PUBLIC_URL}/series`}
                    element={<Series />}
                >
                    <Route
                        path={`${process.env.PUBLIC_URL}/series/:seriesId`}
                        element={<Home />}
                    />
                </Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/search/:type/:id`}
                    element={<Detail />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/search`}
                    element={<Search />}
                />
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
                    <Route
                        path={`${process.env.PUBLIC_URL}/movie/:movieId`}
                        element={<Home />}
                    />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
