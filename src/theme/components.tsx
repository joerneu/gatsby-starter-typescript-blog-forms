/** @jsx jsx */

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import {
    HeadingRatio,
    SiteTheme,
    SmallFontSize,
    SubheadingFontSize,
    SubheadingTopMargin,
    UniversalMargin
} from "./site-theme";

const HeadingsStyle = {
    lineHeight: SiteTheme.lineHeights.heading,
    margin: `calc(1.5 * ${UniversalMargin}) ${UniversalMargin}`,
    fontWeight: SiteTheme.fontWeights.heading,
    "&.small": {
        color: SiteTheme.colors.secondaryText,
        display: "block",
        marginTop: SubheadingTopMargin,
        fontSize: SubheadingFontSize !== SmallFontSize ? SubheadingFontSize : undefined
    }
};

export const H1 = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1
        css={[
            HeadingsStyle,
            { fontSize: `calc(1rem * ${HeadingRatio} * ${HeadingRatio} * ${HeadingRatio} * ${HeadingRatio})` }
        ]}
        {...props}
    />
);

export const H2 = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2
        css={[HeadingsStyle, { fontSize: `calc(1rem * ${HeadingRatio} * ${HeadingRatio} * ${HeadingRatio})` }]}
        {...props}
    />
);

export const H3 = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3 css={[HeadingsStyle, { fontSize: `calc(1rem * ${HeadingRatio} * ${HeadingRatio})` }]} {...props} />
);

export const H4 = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h4 css={[HeadingsStyle, { fontSize: `calc(1rem * ${HeadingRatio})` }]} {...props} />
);

export const P = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p css={{ margin: UniversalMargin }} {...props} />
);

export const A = (props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
    const theme = useTheme<typeof SiteTheme>();
    return (
        <a
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
