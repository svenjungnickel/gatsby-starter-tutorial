import React from "react";
import { css } from "@emotion/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import { rhythm } from "../utils/typography.kirkhamTheme";
import Container from "./container";
import DarkModeButton from "./darkModeButton";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <Container>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3
                        css={css`
                            margin-bottom: ${rhythm(2)};
                            display: inline-block;
                            font-style: normal;
                        `}
                    >
                        {data.site.siteMetadata.title}
                    </h3>
                </Link>
                <DarkModeButton />
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/about-css-modules/">About CSS Modules</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                    <ListLink to="/my-files/">My Files</ListLink>
                </ul>
            </header>
            {children}
        </Container>
    );
};
