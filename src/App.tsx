import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/atoms/Header/Header";
import Home from "./components/pages/Home/Home";
import Series from "./components/pages/Series/Series";
import Search from "./components/pages/Search/Search";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/series" element={<Series />} />
                <Route path="/search" element={<Search />} />
                <Route path={"/"} element={<Home />}>
                    <Route path="/movie/:movieId" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
