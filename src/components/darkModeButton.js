import React from "react";
import darkModeButtonStyles from "../styles/darkModeButton.module.scss";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default () => {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <label className={darkModeButtonStyles.darkModeButton}>
                    <input
                        type="checkbox"
                        onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                        checked={theme === "dark"}
                    />{" "}
                    Dark mode
                </label>
            )}
        </ThemeToggler>
    );
};
