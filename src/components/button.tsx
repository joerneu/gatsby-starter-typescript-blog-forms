/** @jsx jsx */

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { Button as ReakitButton } from "reakit";

import { Theme } from "../theme";

interface ButtonProps {
    variant?: "default" | "primary";
}

const Button = ({
    variant,
    ...props
}: ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const theme = useTheme<Theme>();
    return (
        <ReakitButton
            css={[
                {
                    // Reset for Firefox focusing on button elements
                    'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
                        borderStyle: "none",
                        padding: 0
                    },
                    // Fixes for Android 4, iOS and Safari
                    'button, html [type="button"], [type="reset"], [type="submit"]': {
                        "-webkit-appearance": "button"
                    },
                    // Show the overflow in IE
                    overflow: "visible",
                    // Remove inheritance of text-transform in Edge, Firefox, and IE
                    textTransform: "none",
                    // Default styling
                    display: "inline-block",

                    border: `${theme.sizes.border} solid ${theme.colors.buttonBorder}`,
                    borderRadius: theme.radii.universalBorderRadius,
                    padding: `${theme.sizes.universalPadding} calc(1.5 * ${theme.sizes.universalPadding})`,
                    margin: theme.sizes.universalMargin,
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "background 0.3s",
                    '&:not([aria-disabled="true"])': {
                        "&:hover, &:focus": {
                            borderColor: theme.colors.buttonHoverBorder
                        }
                    },
                    "&:disabled, &[disabled]": {
                        cursor: "default",
                        opacity: 0.6
                    }
                },
                variant === "primary"
                    ? {
                          background: theme.colors.buttonPrimaryBackground,
                          color: theme.colors.buttonPrimaryText,
                          '&:not([aria-disabled="true"])': {
                              "&:hover, &:focus": {
                                  background: theme.colors.buttonPrimaryHoverBackground
                              }
                          }
                      }
                    : {
                          background: theme.colors.buttonBackground,
                          color: theme.colors.buttonText,
                          '&:not([aria-disabled="true"])': {
                              "&:hover, &:focus": {
                                  background: theme.colors.buttonHoverBackground
                              }
                          }
                      }
            ]}
            {...props}
        />
    );
};

export default Button;
