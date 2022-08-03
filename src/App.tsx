import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/atoms/Header/Header";
import Home from "./components/pages/Home/Home";
import Program from "./components/pages/Program/Program";
import Search from "./components/pages/Search/Search";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/program" element={<Program />} />
                <Route path="/search" element={<Search />} />
                <Route path={"/"} element={<Home />}>
                    <Route path="/program/:programId" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
