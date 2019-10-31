/** @jsx jsx */

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { Theme } from "../theme";

const Input = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    const theme = useTheme<Theme>();
    return (
        <input
            css={{
                // Correct the cursor style of increment and decrement buttons in Chrome
                '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
                    height: "auto"
                },
                // Correct style in Chrome and Safari
                '[type="search"]': {
                    "-webkit-appearance": "textfield",
                    outlineOffset: -2
                },
                // Correct style in Chrome and Safari
                '[type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration': {
                    "-webkit-appearance": "none"
                },
                // Common textual input styling
                boxSizing: "border-box",
                // Background, color and border should not be unassigned, as the browser defaults will apply
                background: theme.colors.inputBackground,
                color: theme.colors.inputText,
                border: `${theme.sizes.border} solid ${theme.colors.inputBorder}`,
                borderRadius: theme.radii.universalBorderRadius,
                margin: `calc(${theme.sizes.universalMargin} / 2)`,
                padding: `${theme.sizes.universalPadding} calc(1.5 * ${theme.sizes.universalPadding})`,
                "&:hover, &:focus": {
                    borderColor: theme.colors.inputFocus,
                    boxShadow: "none"
                },
                "&:invalid, &:focus:invalid": {
                    borderColor: theme.colors.inputInvalid,
                    boxShadow: "none"
                },
                "&[readonly]": {
                    background: theme.colors.secondaryBackground
                }
            }}
            {...props}
        >
            {children}
        </input>
    );
};

export default Input;
