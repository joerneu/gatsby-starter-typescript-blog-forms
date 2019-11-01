const React = require("react");
const Emotion = require("@emotion/core");
const Theming = require("emotion-theming");

const Theme = require("./src/theme/site-theme");
const ThemeGlobal = require("./src/theme/global");

const Global = Emotion.Global;
const ThemeProvider = Theming.ThemeProvider;
const SiteTheme = Theme.SiteTheme;

exports.wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={SiteTheme}>
            <Global styles={ThemeGlobal.GlobalStyle} />
            {element}
        </ThemeProvider>
    );
};
