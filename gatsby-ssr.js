const React = require("react");
const Emotion = require("@emotion/core");
const Theming = require("emotion-theming");

const Theme = require("./src/theme/site-theme");

const Global = Emotion.Global;
const ThemeProvider = Theming.ThemeProvider;
const SiteTheme = Theme.SiteTheme;

exports.wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={SiteTheme}>
            <Global
                styles={{
                    html: { fontSize: Theme.BaseRootFontSize },
                    // Fix for elements inside headings not displaying properly
                    "a, b, del, em, i, ins, q, span, strong, u": {
                        fontSize: "1em"
                    },
                    "html, *": {
                        fontFamily: Theme.BaseFontFamily,
                        lineHeight: Theme.BaseLineHeight,
                        // Prevent adjustments of font size after orientation changes in mobile.
                        "-webkit-text-size-adjust": "100%"
                    },
                    // "*": {
                    //     fontSize: Theme.BaseFontSize
                    // },
                    body: { margin: 0, color: SiteTheme.colors.text, backgroundColor: SiteTheme.colors.background },
                    // Correct display for Edge & Firefox.
                    details: {
                        display: "block"
                    },
                    // Correct display in all browsers
                    summary: {
                        display: "list-item"
                    },
                    // Abbreviations
                    "abbr[title]": {
                        // Remove bottom border in Firefox 39-
                        borderBottom: "none",
                        // Opinionated style-fix for all browsers
                        textDecoration: "underline dotted"
                    },
                    // Show overflow in Edge.
                    input: {
                        overflow: "visible"
                    },
                    // Prevent elements from affecting the line height in all browsers
                    "sup, sub, code, kbd": {
                        lineHeight: 0,
                        position: "relative",
                        verticalAlign: "baseline"
                    }
                }}
            />
            {element}
        </ThemeProvider>
    );
};
