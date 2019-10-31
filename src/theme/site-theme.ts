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
export const UniversalBorderRadius = "0.125rem";
export const UniversalBoxShadow = "none";

export const LinkColor = "#0277bd";
export const LinkVisitedColor = "#01579b";

export const SiteTheme = {
    colors: {
        background: "#fff",
        text: "#111",
        secondaryText: "#444",
        secondaryBackground: "#f0f0f0",
        linkColor: "#0277bd",
        linkVisitedColor: "#01579b",
        blockquote: "#f57c00",
        sidebar: "#1565c0",
        border: "#aaa",
        secondaryBorder: "#ddd",
        headerBackground: "#f8f8f8",
        headerHoverBackground: "#f0f0f0",
        headerText: "#444",
        headerBorder: "#ddd"
    },
    fonts: {
        body: BaseFontFamily,
        heading: BaseFontFamily,
        monospace: "Menlo, monospace"
    },
    fontWeights: {
        body: 400,
        heading: 500,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.2
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    sizes: {
        universalMargin: "0.5rem",
        universalPadding: "0.5rem",
        border: "0.0625rem",
        headerHeight: "3.1875rem"
    }
};
