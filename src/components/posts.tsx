/** @jsx jsx */

import { jsx } from "@emotion/core";

import { BlogPost } from "../types/blog";
import { SiteLocation, Social } from "../types/site";

import { H2, P } from "../theme";

import Layout from "./layout";
import Link from "./link";
import SEO from "./seo";

interface PostsProps {
    location: SiteLocation;
    posts: { node: BlogPost }[];
    siteTitle: string;
    socialLinks: Social[];
}

const Posts = ({ location, posts, siteTitle: _siteTitle, socialLinks: _socialLinks }: PostsProps) => {
    return (
        <Layout path={location.pathname}>
            <SEO title="All posts" keywords={["blog", "gatsby", "javascript", "react"]} />
            {posts.map(({ node }) => {
                const title = node.title || node.slug;
                //const keywords = node.keywords || [];
                return (
                    <div key={node.slug}>
                        <H2 css={{ marginBottom: 1 }}>
                            <Link to={node.slug}>{title}</Link>
                        </H2>
                        <P>
                            <small>{node.date}</small>
                        </P>
                        <P>{node.excerpt}</P>
                    </div>
                );
            })}
        </Layout>
    );
};

export default Posts;
