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
    nav: [
      {
        text: 'Our packages',
        ariaLabel: 'Our packages',
        items: [
          { text: 'Laravel Menus Manager', link: 'https://laravel-menus-manager.netlify.app' },
          { text: 'Laravel Theme Installer', link: 'https://github.com/hexadog/laravel-theme-installer' }
        ]
      }
    ],
    sidebar: [{
        title: 'Package',
        collapsable: false,
        children: [
          '',
          'installation',
          'how-it-works'
        ]
      },
      {
        title: 'Usage',
        collapsable: false,
        children: [
          'usage/basic',
          'usage/middleware',
          'usage/assets',
          'usage/components',
          'usage/error-views',
          'usage/package-views',
          'usage/artisan'
        ]
      },
      {
        title: 'Configuration',
        collapsable: false,
        children: [
          'configuration/directory',
          'configuration/assets',
          'configuration/fallback-theme',
          'configuration/cache'
        ]
      }
    ]
  },

  plugins: [
    'versioning',
    '@vuepress/plugin-back-to-top'
  ]
}