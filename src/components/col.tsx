import React from "react";

import Responsive, { ColumnProps } from "./responsive";

const Col = (props: ColumnProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <Responsive {...props} />
);

export default Col;
