import { useLocation } from "react-router-dom";

export default function Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");

    console.log(keyword);

    return <h1>Search</h1>;
}
