import React from "react";

import Responsive, { RowProps } from "./responsive";

const Row = (props: RowProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <Responsive {...props} />
);

Row.defaultProps = {
    columns: 12
};

export default Row;
