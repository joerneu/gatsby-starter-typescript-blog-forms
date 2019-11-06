import React, { useContext } from "react";

import { jsx, Interpolation } from "@emotion/core";

import { useTheme } from "emotion-theming";

import { RowContext } from "../types/context";

import { Theme } from "../theme";

const FluidStyle = {
    display: "block",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "auto",
    maxWidth: "100%"
};

const createStyle = (columns: number, value?: ColumnValue): Interpolation => {
    if (!value || value == "fluid") {
        return FluidStyle;
    }
    if (value == "hidden") {
        return { display: "none" };
    }
    const percentage = ((value / columns) * 100).toString(10) + "%";
    return {
        display: "block",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: percentage,
        maxWidth: percentage
    };
};

export interface RowProps {
    columns?: number;
}

type ColumnValue = number | "fluid" | "hidden";

export interface ColumnProps {
    sm?: ColumnValue;
    md?: ColumnValue;
    lg?: ColumnValue;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type As<P = any> = React.ReactType<P>;

type PropsWithAs<P, T extends As> = P &
    Omit<React.ComponentProps<T>, "as" | keyof P> & {
        as?: T;
        children?: React.ReactNode;
    };

interface ResponsiveProps extends RowProps, ColumnProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Responsive = <T extends React.ElementType<any> = "div">({
    as,
    sm,
    md,
    lg,
    columns,
    ...props
}: PropsWithAs<ResponsiveProps, T> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
    const rowContext = useContext(RowContext);
    const theme = useTheme<Theme>();
    const css: Interpolation[] = [];
    // Setting the sm, md or lg property makes it a column
    if (sm || md || lg) {
        const rowColumns = rowContext ? rowContext.columns : 12;
        css.push(createStyle(rowColumns, sm));
        if (md) {
            css.push({
                [theme.mediaQueries[0]]: createStyle(rowColumns, md)
            });
        }
        if (lg) {
            css.push({
                [theme.mediaQueries[1]]: createStyle(rowColumns, lg)
            });
        }
    }
    // Setting the columns property makes it a row
    if (columns) {
        css.push({
            boxSizing: "border-box",
            display: "flex",
            flex: "0 1 auto",
            flexFlow: "row wrap"
        });
    }
    const elementType = as || "div";
    const element = jsx(elementType, {
        css,
        ...props
    });
    return columns ? <RowContext.Provider value={{ columns }}>{element}</RowContext.Provider> : element;
};

export default Responsive;
