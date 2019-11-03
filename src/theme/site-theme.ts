// Based on mini.css (See: https://github.com/Chalarangelo/mini.css)

export const BaseRootFontSize = 16;
export const BaseFontFamily =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, sans-serif';
export const BaseLineHeight = 1.5;
export const BaseFontSize = "1rem";

export const HeadingRatio = 1.19;
export const SubheadingFontSize = "0.75em";
export const SubheadingTopMargin = "-0.25rem";
export const SmallFontSize = "0.75em";

export const UniversalMargin = "0.5rem";
export const UniversalPadding = "0.5rem";

const Breakpoints = ["768px", "1280px"];

export const SiteTheme = {
    colors: {
        background: "#fff",
        text: "#111",
        secondaryText: "#444",
        secondaryBackground: "#f0f0f0",
        linkColor: "#0277bd",
        linkVisitedColor: "#01579b",
        preformatted: "#1565c0",
        border: "#aaa",
        secondaryBorder: "#ddd",
        headerBackground: "#f8f8f8",
        headerHoverBackground: "#f0f0f0",
        headerActiveBorder: "#1565c0",
        headerText: "#444",
        headerBorder: "#ddd",
        inputBackground: "#f8f8f8",
        inputText: "#111",
        inputBorder: "#ddd",
        inputFocus: "#0288d1",
        inputInvalid: "#d32f2f",
        buttonBackground: "#e2e2e2",
        buttonHoverBackground: "#dcdcdc",
        buttonText: "#212121",
        buttonBorder: "transparent",
        buttonHoverBorder: "transparent",
        buttonGroupBorder: "rgba(124,124,124, 0.54)",
        buttonPrimaryBackground: "#1976d2",
        buttonPrimaryHoverBackground: "#1565c0",
        buttonPrimaryText: "#f8f8f8"
    },
    fonts: {
        body: BaseFontFamily,
        heading: BaseFontFamily,
        monospace: "Menlo, Consolas, monospace"
    },
    fontWeights: {
        body: 400,
        heading: 500,
        bold: 700
    },
    lineHeights: {
        body: BaseLineHeight,
        heading: 1.2
    },
    fontSizes: {
        code: "0.85em"
    },
    sizes: {
        universalMargin: UniversalMargin,
        universalPadding: UniversalPadding,
        border: "0.0625rem",
        headerHeight: "3.1875rem"
    },
    radii: {
        universalBorderRadius: "0.125rem"
    },
    shadows: {
        universalBoxShadow: "none"
    },
    breakpoints: Breakpoints,
    // Predefined media queries
    mediaQueries: Breakpoints.map(bp => `@media screen and (min-width: ${bp})`)
};
