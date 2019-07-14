import React from "react";
import headerStyles from "../styles/header.module.scss";

export default ({ type, headerText }) => {
    switch (type) {
        default:
            return <h1 className={headerStyles.header}>{headerText}</h1>;
        case 2:
            return <h2 className={headerStyles.header}>{headerText}</h2>;
        case 3:
            return <h3 className={headerStyles.header}>{headerText}</h3>;
        case 4:
            return <h4 className={headerStyles.header}>{headerText}</h4>;
        case 5:
            return <h5 className={headerStyles.header}>{headerText}</h5>;
    }
};
