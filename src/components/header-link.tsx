/** @jsx jsx */

import React, { useContext } from "react";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeaderLink = React.forwardRef<any, HeaderLinkProps>(({ mobile, text, to, ...props }, ref) => {
    const { path } = useContext(PageContext);
    const theme = useTheme<Theme>();
    const pathBase = "/" + path.split("/")[1];
    const borderBottomColor = !mobile && pathBase === to ? theme.colors.headerActiveBorder : undefined;
    return (
        <Link
            css={[
                getHeaderItemStyle(theme),
                {
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover,&:focus": {
                        background: theme.colors.headerHoverBackground
                    }
                },
                mobile && { top: 0 },
                borderBottomColor && {
                    borderBottom: `calc(2 * ${theme.sizes.border}) solid ${borderBottomColor}`
                }
            ]}
            ref={ref}
            aria-label={text}
            to={to}
            {...props}
        >
            {text}
        </Link>
    );
});

export default HeaderLink;
