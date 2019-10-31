/** @jsx jsx */

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import HeaderLink from "./header-link";
import { Theme } from "../theme";

const Header = () => {
    const theme = useTheme<Theme>();
    return (
        <header
            css={{
                height: theme.sizes.headerHeight,
                // Always apply background color to avoid shine through
                background: theme.colors.headerBackground,
                color: theme.colors.headerText,
                borderBottom: `${theme.sizes.border} solid ${theme.colors.headerBorder}`,
                padding: `calc(${theme.sizes.universalPadding} / 4) 0`,
                // Responsiveness for smaller displays, scrolls horizontally
                whiteSpace: "nowrap",
                overflowX: "auto",
                overflowY: "hidden"
            }}
        >
            <HeaderLink text="Home" to="/" />
            <HeaderLink text="Blog" to="/blog" />
            <HeaderLink text="About" to="/about" />
        </header>
    );
};

export default Header;
