/** @jsx jsx */

import { jsx } from "@emotion/core";

import { H1, P } from "../theme";

import Col from "../components/col";
import Container from "../components/container";
import Layout from "../components/layout";
import Row from "../components/row";
import SEO from "../components/seo";

import { PageProps } from "../types/site";

const About = ({ location }: PageProps) => {
    return (
        <Layout path={location.pathname}>
            <SEO title="About" />
            <Container>
                <Row>
                    <Col>
                        <H1>About page</H1>
                        <P>About this website</P>
                    </Col>
                </Row>
                <Row columns={3}>
                    <Col sm={3} md={2}>
                        <P>Three column layout</P>
                    </Col>
                    <Col sm={3} md={1}>
                        <P>2nd column</P>
                        <P>(one third &gt; medium width)</P>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default About;
