/** @jsx jsx */

import { useContext } from "react";

import { jsx } from "@emotion/core";

import { Link } from "gatsby";

import { useTheme } from "emotion-theming";

import { Theme } from "../theme";

import { PageContext } from "../types/context";

import { getHeaderItemStyle } from "./styles";

interface HeaderLinkProps {
    mobile?: boolean;
    text: string;
    to: string;
}

const HeaderLink = ({ mobile, text, to }: HeaderLinkProps) => {
    const { path } = useContext(PageContext);
    const theme = useTheme<Theme>();
    const pathBase = "/" + path.split("/")[1];
    const borderBottomColor =
        !mobile && pathBase === to ? theme.colors.headerActiveBorder : theme.colors.headerBackground;
    return (
        <Link
            css={[
                getHeaderItemStyle(theme),
                {
                    textDecoration: "none",
                    cursor: "pointer",
                    borderBottom: `calc(2 * ${theme.sizes.border}) solid ${borderBottomColor}`,
                    "&:hover": {
                        background: theme.colors.headerHoverBackground
                    }
                }
            ]}
            aria-label={text}
            to={to}
        >
            {text}
        </Link>
    );
};

export default HeaderLink;
