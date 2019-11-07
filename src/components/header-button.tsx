/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { Theme } from "../theme";

import { getHeaderItemStyle } from "./styles";

interface HeaderButtonProps {
    text: string;
    onClick?: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: React.Ref<any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeaderButton = React.forwardRef<any, HeaderButtonProps>(({ text, onClick, ...props }, ref) => {
    const theme = useTheme<Theme>();
    return (
        <a
            css={[
                getHeaderItemStyle(theme),
                {
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover,&:focus": {
                        background: theme.colors.headerHoverBackground
                    }
                }
            ]}
            ref={ref}
            onClick={onClick}
            {...props}
        >
            {text}
        </a>
    );
});

export default HeaderButton;
