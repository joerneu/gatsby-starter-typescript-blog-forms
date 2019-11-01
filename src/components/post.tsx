/** @jsx jsx */

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPost } from "../types/blog";
import { SiteLocation, SiteMetadata } from "../types/site";

import { H1, P, Theme } from "../theme";

import Layout from "./layout";
import SEO from "./seo";

interface PostProps {
    data: {
        post: BlogPost;
        site: { siteMetadata: SiteMetadata };
    };
    location: SiteLocation;
    previous: BlogPost;
    next: BlogPost;
}

const Post = ({
    data: {
        post,
        site: {
            siteMetadata: { title: _title }
        }
    },
    location,
    previous: _previous,
    next: _next
}: PostProps) => {
    const theme = useTheme<Theme>();
    return (
        <Layout path={location.pathname}>
            <SEO title={post.title} description={post.excerpt} keywords={post.keywords} />
            <H1>{post.title}</H1>
            <P css={{ marginTop: -3, marginBottom: 3 }}>{post.date}</P>
            <div
                css={{
                    // Make images responsive by default.
                    img: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    "code, kbd, pre, samp": {
                        fontFamily: theme.fonts.monospace,
                        fontSize: theme.fontSizes.code
                    },
                    code: {
                        // No border color and fore color is the default for text
                        background: theme.colors.secondaryBackground,
                        borderRadius: theme.radii.universalBorderRadius,
                        //padding: `calc(${theme.sizes.universalPadding} / 4) calc(${theme.sizes.universalPadding} / 2)`,
                        boxShadow: theme.shadows.universalBoxShadow
                    },
                    kbd: {
                        // No border color
                        background: theme.colors.text,
                        color: theme.colors.background,
                        borderRadius: theme.radii.universalBorderRadius,
                        //padding: `calc(${theme.sizes.universalPadding} / 4) calc(${theme.sizes.universalPadding} / 2)`,
                        boxShadow: theme.shadows.universalBoxShadow
                    },
                    pre: {
                        // Fore color is the default
                        // Responsiveness
                        overflow: "auto",
                        maxWidth: 640,
                        background: theme.colors.secondaryBackground,
                        padding: `calc(1.5 * ${theme.sizes.universalPadding})`,
                        margin: theme.sizes.universalMargin,
                        border: `${theme.sizes.border} solid ${theme.colors.secondaryBorder}`,
                        borderLeft: `calc(4 * ${theme.sizes.border}) solid ${theme.colors.preformatted}`,
                        borderRadius: `0 ${theme.radii.universalBorderRadius} ${theme.radii.universalBorderRadius} 0`,
                        boxShadow: theme.shadows.universalBoxShadow
                    }
                }}
            >
                <MDXRenderer>{post.body}</MDXRenderer>
            </div>
        </Layout>
    );
};

export default Post;
