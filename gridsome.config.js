// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Modafinilici',
  titleTemplate: '%s',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://modafinilici.com'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/blog/', title: 'Blog' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Introducere',
            items: [
              '/modafinil-romania/',
              '/modafinil-romania/',
            ]
          },
          {
            title: 'Siguranta',
            items: [
              '/modafinil-romania/',
              '/modafinil-romania/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.md'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
		config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      },
    },
	{
      use: 'gridsome-plugin-robots',
      options: {
        host: '',
        sitemap: 'https://modafinilici.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
	{
      use: 'klaro-gridsome',
      options: {
        privacyPolicy: '/confidentialitate/',
        cookieName: 'consent',
        translations: {
          ro: {
            consentModal: {
              description: 'Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.',
            },
            googleAnalytics: {
              description: 'Analizează site-urile alimentate de Google Analytics, permițându-ne să vedem cum utilizatorii vizitează site-ul nostru web.'
            },
            purposes: {
              analytics: 'Analytics'
            },
          },
        },
        apps: [
          {
            name: 'googleAnalytics',
            default: true,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
              '_ga',
              '_gcl_au',
              '_gid',
              '_gat'
            ],
            required: false,
            optOut: true,
            onlyOnce: false
          }
        ]
      }
    },

  ],
  templates: {
    MarkdownPage: '/:slug'
  }
}