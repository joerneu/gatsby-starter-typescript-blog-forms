/** @jsx jsx */

import { jsx } from "@emotion/core";

import { Link } from "gatsby";

import { useTheme } from "emotion-theming";

import { Theme } from "../theme";

// import { PageContext } from "../types/context";
// import { useContext } from "react";

interface HeaderLinkProps {
    text: string;
    to: string;
}
const HeaderLink = ({ text, to }: HeaderLinkProps) => {
    // const { path } = useContext(PageContext);
    // if (path === to) {
    //     return <span css={{ marginRight: 8 }}>{text}</span>;
    // }
    const theme = useTheme<Theme>();
    return (
        <Link
            css={{
                display: "inline-block",
                boxSizing: "border-box",
                position: "relative",
                // Use universal-padding to offset the padding of the header
                top: `calc(0rem - ${theme.sizes.universalPadding} / 4)`,
                // Fill header
                height: `calc(${theme.sizes.headerHeight} + ${theme.sizes.universalPadding} / 2)`,
                // Apply color regardless to override styling from other things
                background: theme.colors.headerBackground,
                lineHeight: `calc(${theme.sizes.headerHeight} - ${theme.sizes.universalPadding} * 1.5)`,
                textAlign: "center",
                color: theme.colors.headerText,
                border: 0,
                borderRadius: 0,
                padding: `${theme.sizes.universalPadding} calc(1.5 * ${theme.sizes.universalPadding})`,
                textDecoration: "none",
                cursor: "pointer",
                margin: 0,
                "&:hover, &:focus": {
                    background: theme.colors.headerHoverBackground
                }
            }}
            to={to}
        >
            {text}
        </Link>
    );
};

export default HeaderLink;
