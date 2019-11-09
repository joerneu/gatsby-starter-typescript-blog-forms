import React from "react";

import { Helmet } from "react-helmet";

import { useStaticQuery, graphql } from "gatsby";

import { SeoQuery } from "@generated/graphql-types";

// There are warnings with React >= 16.8 and react-helmet
// See: https://github.com/nfl/react-helmet/issues/426
// and: https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/

type MetaProps = JSX.IntrinsicElements["meta"];

interface SeoProps {
    description?: string;
    lang: string;
    meta: MetaProps[];
    keywords: string[];
    title: string;
}

function SEO({ description, lang, meta, keywords, title }: SeoProps) {
    const { site } = useStaticQuery<SeoQuery>(
        graphql`
            query SeoQuery {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const metaDescription = description || site!.siteMetadata!.description!;
    // Waiting for Gatsby to support TypeScript 3.7:
    //const metaDescription = description ?? site?.siteMetadata?.description ?? undefined;
    let metaData: MetaProps[] = [
        {
            name: "description",
            content: metaDescription
        },
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:description",
            content: metaDescription
        },
        {
            property: "og:type",
            content: "website"
        },
        {
            name: "twitter:card",
            content: "summary"
        },
        {
            name: "twitter:creator",
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            content: site!.siteMetadata!.author!
        },
        {
            name: "twitter:title",
            content: title
        },
        {
            name: "twitter:description",
            content: metaDescription
        }
    ];
    if (keywords) {
        metaData = metaData.concat(
            keywords.length > 0
                ? {
                      name: "keywords",
                      content: keywords.join(", ")
                  }
                : []
        );
    }
    if (meta) {
        metaData = metaData.concat(meta);
    }
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            titleTemplate={`%s | ${site!.siteMetadata!.title}`}
            meta={metaData}
        />
    );
}

SEO.defaultProps = {
    lang: "en",
    meta: [],
    keywords: []
};

export default SEO;
