/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Gatsby Tutorial`,
        titleTemplate: "%s · The Real Hero",
        description: "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
        url: "https://evildash.surge.sh", // No trailing slash allowed!
        image: "https://picsum.photos/400/300", // Path to your image you placed in the 'static' folder
        twitterUsername: "@SvenJungnickel1",
        lang: "en",
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-emotion`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.kirkhamTheme`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        // The offline plugin should be listed after the manifest plugin so that the offline plugin can cache the
        // created manifest.webmanifest
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-dark-mode`,
    ],
};
