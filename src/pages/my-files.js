import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/SEO";

const siteTitle = `My Site's Files`;

export default ({ data }) => (
    <Layout>
        <SEO title={siteTitle} />
        <Header headerText={siteTitle} />
        <table>
            <thead>
                <tr>
                    <th>relativePath</th>
                    <th>prettySize</th>
                    <th>extension</th>
                    <th>birthTime</th>
                </tr>
            </thead>
            <tbody>
                {data.allFile.edges.map(({ node }, index) => (
                    <tr key={index}>
                        <td>{node.relativePath}</td>
                        <td>{node.prettySize}</td>
                        <td>{node.extension}</td>
                        <td>{node.birthTime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Layout>
);

export const query = graphql`
    query {
        allFile(sort: { fields: [birthTime], order: DESC }) {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`;
