import {
    Col,
    Nav,
    Search,
    Logo,
    Category,
    Item,
    logoVariants,
    Dot,
    Input,
    inputVariants,
    searchVariants,
    navVariants,
} from "./style";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const isMatchHome = useMatch("/");
    const isMatchProgram = useMatch("program");
    const navAnimation = useAnimation();

    const [searchOpen, setSearchOpen] = useState(false);
    function _onClickSearch() {
        setSearchOpen((prev) => !prev);
    }

    const { scrollY } = useScroll();
    useEffect(() => {
        scrollY.onChange(() => {
            console.log(scrollY.get());
            if (scrollY.get() > 100) {
                navAnimation.start("active");
            } else {
                navAnimation.start("initial");
            }
        });
    }, [scrollY, navAnimation]);

    return (
        <Nav variants={navVariants} initial="initial" animate={navAnimation}>
            <Col>
                <Logo
                    variants={logoVariants}
                    whileHover="active"
                    initial="initial"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 153.6 115.2"
                >
                    <motion.path d="M66.86,80.23H32.19l-9.02,19.67H10L50.07,13.83l38.66,86.08h-13.38l-8.5-19.67Zm-4.98-11.49l-12.01-27.54-12.59,27.54h24.6Z" />
                    <motion.path d="M109.98,59.83v40.08h-11.8V59.83h-5.04v-11.02h5.04V30.09h11.8v18.73h9.18v11.02h-9.18Z" />
                    <motion.path d="M129.02,94.03c0-1.96,.72-3.65,2.15-5.09s3.15-2.15,5.14-2.15,3.71,.72,5.14,2.15,2.15,3.15,2.15,5.14-.72,3.76-2.15,5.19c-1.4,1.4-3.11,2.1-5.14,2.1s-3.79-.7-5.19-2.1c-1.4-1.4-2.1-3.15-2.1-5.25Z" />
                </Logo>
                <Category layout>
                    <Item>
                        <Link to="/">
                            Home
                            {isMatchHome && <Dot layoutId="dot" />}
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/program">
                            Programs
                            {isMatchProgram && <Dot layoutId="dot" />}
                        </Link>
                    </Item>
                </Category>
            </Col>
            <Col>
                <Search>
                    <motion.span
                        onClick={_onClickSearch}
                        custom={searchOpen}
                        variants={searchVariants}
                        initial="initial"
                        animate="animate"
                        className="material-symbols-outlined"
                    >
                        search
                    </motion.span>
                    <Input
                        type="text"
                        custom={searchOpen}
                        variants={inputVariants}
                        initial="initial"
                        animate="animate"
                        placeholder="검색어를 입력해주세요."
                    />
                </Search>
            </Col>
        </Nav>
    );
}

export default Header;