/** @jsx jsx */

import { jsx } from "@emotion/core";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPost } from "../types/blog";
import { SiteLocation, SiteMetadata } from "../types/site";

import { H1, P } from "../theme";

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
}: PostProps) => (
    <Layout path={location.pathname}>
        <SEO title={post.title} description={post.excerpt} keywords={post.keywords} />
        <H1>{post.title}</H1>
        <P css={{ marginTop: -3, marginBottom: 3 }}>{post.date}</P>
        <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
);

export default Post;
