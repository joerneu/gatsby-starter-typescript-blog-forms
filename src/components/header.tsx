/** @jsx jsx */

import React, { Fragment } from "react";

import { jsx, css } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { useMenuState, MenuDisclosure, Menu, MenuItem } from "reakit/Menu";
import { useToolbarState, Toolbar, ToolbarItem } from "reakit/Toolbar";

import { Theme } from "../theme";

import HeaderButton from "./header-button";
import HeaderLink from "./header-link";
import Responsive from "./responsive";

const Logo = () => {
    const theme = useTheme<Theme>();
    return (
        <img
            css={{ alignSelf: "center", padding: `0 ${theme.sizes.universalPadding}` }}
            alt="Logo"
            src="/images/logo.png"
        />
    );
};

const NavigationMenu = React.forwardRef((props, ref) => {
    const menu = useMenuState({ placement: "bottom-start" });
    const theme = useTheme<Theme>();
    return (
        <>
            <MenuDisclosure as={HeaderButton} {...menu} {...props} ref={ref} text="&#9776;" aria-label="Main menu" />
            <Menu
                css={{
                    display: "flex",
                    flexDirection: "column",
                    minWidth: "70%",
                    border: `${theme.sizes.border} solid ${theme.colors.headerBorder}`
                }}
                {...menu}
                aria-label="Main menu"
            >
                <MenuItem {...menu} as={HeaderLink} mobile text="Home" to="/" />
                <MenuItem {...menu} as={HeaderLink} mobile text="Blog" to="/blog" />
                <MenuItem {...menu} as={HeaderLink} mobile text="About" to="/about" />
            </Menu>
        </>
    );
});

const Header = () => {
    const toolbar = useToolbarState({ loop: true });
    const theme = useTheme<Theme>();
    const headerStyle = css({
        // Always apply background color to avoid shine through
        background: theme.colors.headerBackground,
        color: theme.colors.headerText,
        borderBottom: `${theme.sizes.border} solid ${theme.colors.headerBorder}`
    });
    const toolbarStyle = css({
        height: theme.sizes.headerHeight,
        padding: `calc(${theme.sizes.universalPadding} / 4) 0`
    });
    return (
        <Fragment>
            <Responsive as="header" css={headerStyle} sm={12} md="hidden" columns={2}>
                <Toolbar {...toolbar} css={toolbarStyle} aria-label="Main navigation">
                    <ToolbarItem {...toolbar} as={NavigationMenu} />
                </Toolbar>
                <Logo />
            </Responsive>
            <Responsive as="header" css={headerStyle} sm="hidden" md={12} columns={2}>
                <Logo />
                <Toolbar {...toolbar} css={toolbarStyle} aria-label="Main toolbar">
                    <ToolbarItem {...toolbar} as={HeaderLink} text="Home" to="/" />
                    <ToolbarItem {...toolbar} as={HeaderLink} text="Blog" to="/blog" />
                    <ToolbarItem {...toolbar} as={HeaderLink} text="About" to="/about" />
                </Toolbar>
            </Responsive>
        </Fragment>
    );
};

export default Header;
