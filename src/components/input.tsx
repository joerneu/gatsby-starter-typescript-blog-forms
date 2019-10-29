/** @jsx jsx */

import { jsx } from "@emotion/core";

const Input = ({
    children,
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => (
    <input
        css={{
            display: "block",
            borderRadius: "0.2rem",
            padding: "0.5em 0.75em",
            border: "1px solid #000",
            color: "#222",
            "&:focus": {
                borderColor: "#d80",
                outline: "none"
            }
        }}
        {...props}
    >
        {children}
    </input>
);

export default Input;
