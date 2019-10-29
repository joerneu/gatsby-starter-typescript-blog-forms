/** @jsx jsx */

import { jsx } from "@emotion/core";

import { SiteTheme } from "./site-theme";

export const H1 = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 css={{ fontFamily: SiteTheme.fonts.heading }} {...props}>
        {children}
    </h1>
);

export const H2 = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2 css={{ fontFamily: SiteTheme.fonts.heading }} {...props}>
        {children}
    </h2>
);

export const H3 = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3 css={{ fontFamily: SiteTheme.fonts.heading }} {...props}>
        {children}
    </h3>
);

export const P = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p css={{ fontFamily: SiteTheme.fonts.heading }} {...props}>
        {children}
    </p>
);
