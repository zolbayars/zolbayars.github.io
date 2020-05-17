module.exports = {
  siteMetadata: {
    siteTitle: 'Working Remotely From Mongolia',
    siteDescription: 'My Thoughts on Productivity, Programming, and Mongolia',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://code.zolbayar.com/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Zolo | Zolbayar Bayarsaikhan', // for example - 'Ivan Ganev'
    authorDescription: 'Software Developer @ blueprint.', // short text about the author
    avatar: '/profile_zolbayar.png',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:zolbayarq@gmail.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/zolkash`
      },
      {
        icon: `github`,
        url: `https://github.com/zolbayars`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          // yearSeparator: true,
          // yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-126269793-3'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `code-zolbayar`
      }
    }
  ]
};
