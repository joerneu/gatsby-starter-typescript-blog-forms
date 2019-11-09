module.exports = {
    plugins: [
        {
            resolve: "gatsby-theme-blog-core",
            options: { basePath: "/blog" }
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-plugin-codegen",
            options: {
                localSchemaFile: "generated/graphql-schema.json",
                output: "generated/graphql-types.d.ts",
                outputFlat: true
            }
        },
        "gatsby-plugin-netlify-cms"
    ],
    siteMetadata: {
        title: "My Website Title",
        author: "My Name",
        description: "My site description...",
        social: [
            {
                name: "twitter",
                url: "https://twitter.com/gatsbyjs"
            },
            {
                name: "github",
                url: "https://github.com/joerneu/gatsby-starter-typescript-blog-forms"
            }
        ]
    }
};
