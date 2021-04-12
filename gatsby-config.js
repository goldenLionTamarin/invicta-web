module.exports = {
  siteMetadata: {
    title: 'Invicta Serviços 24 horas',
    author: 'Lucas Nable',
    description: 'Invicta serviços 24 horas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icons8-diamond.gif', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
