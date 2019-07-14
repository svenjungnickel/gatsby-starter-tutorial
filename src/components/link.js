import React from "react";
import { Link } from "gatsby";
import linkStyles from "../styles/link.module.scss";

export default ({ children, to }) => {
    return (
        <Link className={linkStyles.link} to={to}>
            {children}
        </Link>
    );
};
