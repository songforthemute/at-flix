import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        yellow: string;
        red: string;
        black: {
            darkest: string;
            darker: string;
            lighter: string;
        };
        white: {
            lighter: string;
            darker: string;
        };
        padding: {
            desktop: string;
            mobile: string;
        };
    }
}
