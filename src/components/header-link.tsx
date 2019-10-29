/** @jsx jsx */

import { jsx } from "@emotion/core";

import { Link } from "gatsby";

import { PageContext } from "../types/context";
import { useContext } from "react";

interface HeaderLinkProps {
    text: string;
    to: string;
}
const HeaderLink = ({ text, to }: HeaderLinkProps) => {
    const { path } = useContext(PageContext);
    if (path === to) {
        return <span css={{ marginRight: 8 }}>{text}</span>;
    }
    return (
        <Link css={{ marginRight: 8 }} to={to}>
            {text}
        </Link>
    );
};

export default HeaderLink;
