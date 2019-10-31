/** @jsx jsx */

import { jsx } from "@emotion/core";

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

export const H1 = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1
        css={[
            HeadingsStyle,
            { fontSize: `calc(1rem * ${HeadingRatio} * ${HeadingRatio} * ${HeadingRatio} * ${HeadingRatio})` }
        ]}
        {...props}
    >
        {children}
    </h1>
);

export const H2 = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2
        css={[HeadingsStyle, { fontSize: `calc(1rem * ${HeadingRatio} * ${HeadingRatio} * ${HeadingRatio})` }]}
        {...props}
    >
        {children}
    </h2>
);

export const H3 = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3 css={[HeadingsStyle, { fontSize: `calc(1rem * ${HeadingRatio} * ${HeadingRatio})` }]} {...props}>
        {children}
    </h3>
);

export const H4 = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h4 css={[HeadingsStyle, { fontSize: `calc(1rem * ${HeadingRatio})` }]} {...props}>
        {children}
    </h4>
);

export const P = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p css={{ margin: UniversalMargin }} {...props}>
        {children}
    </p>
);
