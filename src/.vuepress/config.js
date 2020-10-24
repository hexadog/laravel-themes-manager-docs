const versioning = require('./lib/versioning.js')
const {
  description
} = require('../../package')

module.exports = {
  title: 'Laravel Themes Manager',
  description: description,
  theme: 'titanium',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'link',
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3a0839' },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', {
      name: 'theme-color',
      content: '#ffffff'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }]
  ],

  themeConfig: {
    repo: 'hexadog/laravel-themes-manager',
    docsRepo: 'hexadog/laravel-themes-manager-docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nextVersionTitle: 'develop',
    versions: {
      latest: versioning.versions.latest,
      selected: versioning.versions.latest,
      all: versioning.versions.all
    },
    nav: [
      {
          text: 'Versions',
          items: versioning.linksFor('installation.md')
      },
      {
        text: 'Our packages',
        ariaLabel: 'Our packages',
        items: [
          { text: 'Laravel Menus Manager', link: 'https://laravel-menus-manager.netlify.app' },
          { text: 'Laravel Theme Installer', link: 'https://github.com/hexadog/laravel-theme-installer' }
        ]
      }
    ],
    sidebar: versioning.sidebars
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
      // Only search the latest version, e.g. 4.3, otherwise many duplicates will show up
      test: `/${versioning.versions.latest.replace('.', '\\.')}/`
    }]
  ]
}