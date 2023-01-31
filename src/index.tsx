import { render } from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// styles
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/theme";
// for debug
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const rootElement = document.getElementById("root");
const client = new QueryClient();

render(
    <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
        {/* for debug */}
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>,

    rootElement
);
