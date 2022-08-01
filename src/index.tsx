import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root");

const client = new QueryClient();

render(
    <RecoilRoot>
        <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </RecoilRoot>,
    rootElement
);
