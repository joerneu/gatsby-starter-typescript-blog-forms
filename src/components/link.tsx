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

const Link = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
    // const { path } = useContext(PageContext);
    // if (path === to) {
    //     return <span css={{ marginRight: 8 }}>{text}</span>;
    // }
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
        >
            {children}
        </GatsbyLink>
    );
};

export default Link;
