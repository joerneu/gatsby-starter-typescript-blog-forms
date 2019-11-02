/** @jsx jsx */

import { jsx } from "@emotion/core";

import { RowContext } from "../types/context";

interface RowProps {
    columns: number;
}

const Row = ({
    columns,
    ...props
}: RowProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <RowContext.Provider value={{ columns }}>
            <div
                css={{
                    boxSizing: "border-box",
                    display: "flex",
                    flex: "0 1 auto",
                    flexFlow: "row wrap"
                }}
                {...props}
            />
        </RowContext.Provider>
    );
};

Row.defaultProps = {
    columns: 12
};

export default Row;
