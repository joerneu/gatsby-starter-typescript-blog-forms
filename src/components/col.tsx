/** @jsx jsx */

import { jsx } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { Theme } from "../theme";
import { useContext } from "react";
import { RowContext } from "../types/context";

const FluidStyle = {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "auto",
    maxWidth: "100%"
};

const createStyle = (columns: number, span?: number) => {
    if (!span) {
        return FluidStyle;
    }
    const percentage = ((span / columns) * 100).toString(10) + "%";
    return {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: percentage,
        maxWidth: percentage
    };
};

interface ColProps {
    sm?: number;
    md?: number;
    lg?: number;
}

const Col = ({
    sm,
    md,
    lg,
    ...props
}: ColProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const rowContext = useContext(RowContext);
    const columns = rowContext.columns;
    const theme = useTheme<Theme>();
    // flexGrow: 0,
    // flexShrink: 0,
    // flexBasis: auto
    return (
        <div
            css={[
                createStyle(columns, sm),
                md
                    ? {
                          [theme.mediaQueries[0]]: createStyle(columns, md)
                      }
                    : undefined,
                lg
                    ? {
                          [theme.mediaQueries[1]]: createStyle(columns, lg)
                      }
                    : undefined
            ]}
            {...props}
        />
    );
};

export default Col;
