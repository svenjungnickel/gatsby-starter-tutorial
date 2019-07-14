import "../styles/global.scss";
import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.overrideThemeStyles = () => ({
    body: {
        color: "var(--textTitle)",
    },
    a: {
        color: "var(--textLink)",
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    "a.anchor": {
        boxShadow: "none",
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
        stroke: "var(--textLink)",
    },
    hr: {
        background: "var(--hr)",
    },
    h1: {
        color: "var(--textTitle)",
    },
    h2: {
        color: "var(--textTitle)",
    },
    h3: {
        color: "var(--textTitle)",
    },
    h4: {
        color: "var(--textTitle)",
    },
    h5: {
        color: "var(--textTitle)",
    },
});

const typography = new Typography(kirkhamTheme);

export default typography;
export const rhythm = typography.rhythm;
