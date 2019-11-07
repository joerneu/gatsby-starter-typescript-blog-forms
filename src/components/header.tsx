/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { useMenuState, MenuDisclosure, Menu, MenuItem } from "reakit/Menu";
import { useToolbarState, Toolbar, ToolbarItem } from "reakit/Toolbar";

import { Theme } from "../theme";

import HeaderButton from "./header-button";
import HeaderLink from "./header-link";
import Responsive from "./responsive";

const MoreItems = React.forwardRef((props, ref) => {
    const menu = useMenuState({ placement: "bottom-start" });
    return (
        <>
            <MenuDisclosure as={HeaderButton} text="&#9776;" {...menu} {...props} ref={ref} aria-label="Main menu" />
            <Menu
                css={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column"
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
    return (
        <Toolbar
            {...toolbar}
            as="header"
            aria-label="Main toolbar"
            css={{
                height: theme.sizes.headerHeight,
                // Always apply background color to avoid shine through
                background: theme.colors.headerBackground,
                color: theme.colors.headerText,
                borderBottom: `${theme.sizes.border} solid ${theme.colors.headerBorder}`,
                padding: `calc(${theme.sizes.universalPadding} / 4) 0`,
                // Responsiveness for smaller displays, scrolls horizontally
                whiteSpace: "nowrap",
                overflowX: "auto",
                overflowY: "hidden"
            }}
        >
            <Responsive sm={12} md="hidden">
                <ToolbarItem {...toolbar} as={MoreItems} />
            </Responsive>
            <Responsive sm="hidden" md={12}>
                <ToolbarItem {...toolbar} as={HeaderLink} text="Home" to="/" />
                <ToolbarItem {...toolbar} as={HeaderLink} text="Blog" to="/blog" />
                <ToolbarItem {...toolbar} as={HeaderLink} text="About" to="/about" />
            </Responsive>
        </Toolbar>
    );
};

export default Header;
