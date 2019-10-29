import React from "react";

import HeaderLink from "./header-link";

const Header = () => (
    <header>
        <HeaderLink text="Home" to="/" />
        <HeaderLink text="Blog" to="/blog" />
        <HeaderLink text="About" to="/about" />
    </header>
);

export default Header;
