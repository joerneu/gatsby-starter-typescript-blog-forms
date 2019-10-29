/** @jsx jsx */

import { jsx } from "@emotion/core";

import { H1, P } from "../theme";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { PageProps } from "../types/site";

const About = ({ location }: PageProps) => {
    return (
        <Layout path={location.pathname}>
            <SEO title="About" />
            <H1 css={{ marginBottom: 1 }}>About page</H1>
            <P>About this blog</P>
        </Layout>
    );
};

export default About;
