/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/core";

import { MDXProvider } from "@mdx-js/react";

import { PageContext } from "../types/context";

import { A, H1, H2, H3, H4, P } from "../theme";

import Header from "./header";

const mdxComponents = { a: A, p: P, h1: H1, h2: H2, h3: H3, h4: H4 };

interface LayoutProps {
    path: string;
}

const Layout = ({ children, path }: React.PropsWithChildren<LayoutProps>) => (
    <MDXProvider components={mdxComponents}>
        <PageContext.Provider value={{ path }}>
            <Header />
            {children}
        </PageContext.Provider>
    </MDXProvider>
);

export default Layout;
