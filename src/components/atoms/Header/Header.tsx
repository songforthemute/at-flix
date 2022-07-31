import { Col, Nav, Btn, Logo, Category, Item } from "./style";

function Header() {
    return (
        <Nav>
            <Col>
                <Logo />
                <Category>
                    <Item>Home</Item>
                    <Item>Programs</Item>
                </Category>
            </Col>
            <Col>
                <Btn>Search</Btn>
            </Col>
        </Nav>
    );
}

export default Header;
