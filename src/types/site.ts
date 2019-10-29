import { PageRendererProps } from "gatsby";

export interface PageProps extends PageRendererProps {
    path: string;
}

export type SiteLocation = {
    pathname: string;
};

export type SiteMetadata = {
    title: string;
};

export type Social = {
    name: string;
    url: string;
};
