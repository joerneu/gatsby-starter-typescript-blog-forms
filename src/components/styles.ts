import { ObjectInterpolation } from "@emotion/core";

import { Theme } from "../theme";

export const getHeaderItemStyle = (theme: Theme): ObjectInterpolation<undefined> => ({
    display: "inline-block",
    boxSizing: "border-box",
    position: "relative",
    // Use universal-padding to offset the padding of the header
    top: `calc(0rem - ${theme.sizes.universalPadding} / 4)`,
    // Fill header
    height: `calc(${theme.sizes.headerHeight} + ${theme.sizes.universalPadding} / 2)`,
    // Apply color regardless to override styling from other things
    background: theme.colors.headerBackground,
    lineHeight: `calc(${theme.sizes.headerHeight} - ${theme.sizes.universalPadding} * 1.5)`,
    textAlign: "center",
    color: theme.colors.headerText,
    border: 0,
    borderRadius: 0,
    padding: `${theme.sizes.universalPadding} calc(1.5 * ${theme.sizes.universalPadding})`,
    margin: 0,
    outline: "none"
});
