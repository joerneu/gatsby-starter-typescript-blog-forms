/** @jsx jsx */

import { jsx } from "@emotion/core";

import { Link as GatsbyLink } from "gatsby";

import { useTheme } from "emotion-theming";

import { Theme } from "../theme";

interface LinkProps {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Used to declare that this link replaces the current URL in history with the target */
    replace?: boolean;
    /** The URL you want to link to */
    to: string;
}

const Link = (props: React.PropsWithChildren<LinkProps>) => {
    const theme = useTheme<Theme>();
    return (
        <GatsbyLink
            css={{
                textDecoration: "none",
                "&:link": {
                    color: theme.colors.linkColor
                },
                "&:visited": {
                    color: theme.colors.linkVisitedColor
                },
                "&:hover, &:focus": {
                    textDecoration: "underline"
                }
            }}
            {...props}
        />
    );
};

export default Link;
