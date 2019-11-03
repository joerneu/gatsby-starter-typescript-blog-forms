/** @jsx jsx */

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

const HeaderButton = ({ text, onClick }: HeaderButtonProps) => {
    const theme = useTheme<Theme>();
    return (
        <a css={getHeaderItemStyle(theme)} onClick={onClick}>
            {text}
        </a>
    );
};

export default HeaderButton;
