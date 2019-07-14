import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography.kirkhamTheme";
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/SEO";
import Link from "../components/link";
import BlogPostCount from "../styles/blogPostCount.module.scss";
import BlogPost from "../styles/blogPost.module.scss";

document.addEventListener("DOMContentLoaded", event => {
    (localStorage.getItem("mode") || "dark") === "dark"
        ? document.querySelector("body").classList.add("dark")
        : document.querySelector("body").classList.remove("dark");
});

export default ({ data }) => {
    return (
        <Layout>
            <SEO />
            <Header headerText={data.site.siteMetadata.title} />
            <h4 className={BlogPostCount.blogPostCount}>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <h3
                            css={css`
                                margin-bottom: ${rhythm(1 / 4)};
                            `}
                        >
                            {node.frontmatter.title}{" "}
                            <span className={BlogPost.blogPostDate}>— {node.frontmatter.date}</span>
                        </h3>
                    </Link>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
