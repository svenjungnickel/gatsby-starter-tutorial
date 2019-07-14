import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/SEO";

const siteTitle = "Contact Us!";

export default () => (
    <Layout>
        <SEO title={siteTitle} />
        <Header headerText={siteTitle} />
        <p>Send us a message!</p>
    </Layout>
);
