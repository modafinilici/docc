// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Modafinilici',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'localhost:8080'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/introduction2/', title: 'Introduction' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/introduction2/',
              '/installation2/',
              '/writing-content2/',
              '/modafinil-romania/',
            ]
          },
          {
            title: 'Configuration',
            items: [
              '/settings2/',
              '/sidebar2/',
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
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'UA-144741960-1')
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
        sitemap: 'localhost:8080/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
	{
      use: 'klaro-gridsome',
      options: {
        privacyPolicy: '/confidentialitate/',
        cookieName: 'consent',
        translations: {
          en: {
            consentModal: {
              description: 'Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.',
            },
            googleAnalytics: {
              description: 'Analizează site-urie alimentate de Google Analytics, permițându-ne să vedem cum utilizatorii vizitează site-ul nostru web.'
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
