const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Carlo Teran Website',
        description: 'An amazing website',
        author: 'Carlo Teran',
    },
    plugins: [
        // We first source images from the filesystem
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `src`, `images`),
            },
          },
        // source the markdown tipos from the /tips folder 
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `tip`,
            path: `${__dirname}/src/tips`,
          },
        },
        // then we use transformer sharp to resize them and compress them  
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,  
        {
        // then we use gatsby-mdx to parse markdown, and provide it info on how to handle embedded images  
          resolve: 'gatsby-mdx',
          options: {
            root: __dirname,
            gatsbyRemarkPlugins: [
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 500,
                  linkImagesToOriginal: false,
                },
              },
            ],
          },
        },
    ],
};