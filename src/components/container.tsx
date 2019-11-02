/** @jsx jsx */

import { jsx } from "@emotion/core";

const Container = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div
            css={{
                margin: "0 auto"
            }}
            {...props}
        />
    );
};

export default Container;
