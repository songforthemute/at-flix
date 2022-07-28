import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";

const rootElement = document.getElementById("root");

render(
    <RecoilRoot>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </RecoilRoot>,
    rootElement
);
