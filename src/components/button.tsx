/** @jsx jsx */

import { jsx } from "@emotion/core";

import { Button as ReakitButton } from "reakit";

const Button = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => (
    <ReakitButton
        css={{
            display: "inline-flex",
            fontWeight: 400,
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            padding: "0.375em 0.75em",
            lineHeight: 1.5,
            borderRadius: "0.25rem",
            textDecoration: "none",
            border: "1px solid #aaa",
            cursor: "pointer",
            whiteSpace: "nowrap",
            color: "#fff",
            backgroundColor: "#88f",
            transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
            '&[aria-disabled="true"]': {
                backgroundColor: "#aaa",
                cursor: "auto"
            },
            '&:not([aria-disabled="true"])': {
                "&:hover": {
                    borderColor: "#ccc",
                    backgroundColor: "#99f"
                }
            }
        }}
        {...props}
    >
        {children}
    </ReakitButton>
);

export default Button;
