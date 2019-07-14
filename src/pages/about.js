import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/SEO";

export default ({ data }) => {
    const siteTitle = `About ${data.site.siteMetadata.title}`;

    return (
        <Layout>
            <SEO title={siteTitle} />
            <Header headerText={siteTitle} />
            <div />
            <Header headerText="It's pretty cool" type={2} />
            <p>
                We're the only site running on your computer dedicated to showing the best photos and videos of pandas
                eating lots of food.
            </p>
        </Layout>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
