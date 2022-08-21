import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/atoms/Header/Header";
import Home from "./components/pages/Home/Home";
import Series from "./components/pages/Series/Series";
import Search from "./components/pages/Search/Search";
import Detail from "./components/pages/Detail/Detail";
import Footer from "./components/atoms/Footer/Footer";

export default function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path={`/series`} element={<Series />}>
                    <Route path={`/series/:seriesId`} element={<Home />} />
                </Route>
                <Route path={`/search/:type/:id`} element={<Detail />} />
                <Route path={`/search`} element={<Search />} />
                <Route path={`/`} element={<Home />}>
                    <Route path={`/movie/:movieId`} element={<Home />} />
                </Route>
            </Routes>
            <Footer />
        </HashRouter>
    );
}
