import React from "react";
import containerStyles from "../styles/container.module.scss";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography.kirkhamTheme";

export default ({ children }) => (
    <div
        css={css`
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
        `}
        className={containerStyles.container}
    >
        {children}
    </div>
);
