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
            <Global styles={{ body: { backgroundColor: SiteTheme.colors.background, color: SiteTheme.colors.text } }} />
            {element}
        </ThemeProvider>
    );
};
