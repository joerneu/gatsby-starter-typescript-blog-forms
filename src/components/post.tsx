/** @jsx jsx */

import { jsx } from "@emotion/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPost } from "../types/blog";
import { SiteLocation, SiteMetadata } from "../types/site";

import { H1, P, Theme } from "../theme";

import Layout from "./layout";
import SEO from "./seo";
import { useTheme } from "emotion-theming";

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
                    a: {
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
                    }
                }}
            >
                <MDXRenderer>{post.body}</MDXRenderer>
            </div>
        </Layout>
    );
};

export default Post;
