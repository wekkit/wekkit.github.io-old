/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-plugin-transition-link`
  ],
  siteMetadata: {
    title: 'wekkit.io',
    description:
      "Keith Chia's personal page. Thoughts, opinions and the occasional musing found within."
  }
}
