import { useNavigate } from "react-router-dom";
import { Wrapper, Container, ReturnBtn, Copy } from "./style";

export default function Footer() {
    const navigate = useNavigate();
    const _onClick = () => {
        navigate(-1);
    };

    return (
        <Wrapper>
            <Container>
                <ReturnBtn onClick={_onClick}>&larr;</ReturnBtn>
            </Container>
            <Container>
                <Copy>
                    &copy; {new Date().getFullYear()} At Flix. All rights
                    reserved.
                </Copy>
            </Container>
        </Wrapper>
    );
}
