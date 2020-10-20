const {
  description
} = require('../../package')

module.exports = {
  title: 'Laravel Themes Manager',
  description: description,

  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#3a0839" },
    ],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
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
    lastUpdated: true,
    sidebar: [{
        title: "Package",
        collapsable: false,
        children: [
          ["/", "Introduction"],
          ["/installation", "Installation"],
          ["/how-it-works", "How it works"]
        ]
      },
      {
        title: "Usage",
        collapsable: false,
        children: [
          ["/usage/basic", "Basic usage"],
          ["/usage/middleware", "Middleware"],
          ["/usage/assets", "Theme assets"],
          ["/usage/components", "Blade components"],
          ["/usage/error-views", "Error views"],
          ["/usage/package-views", "Package views"]
        ]
      },
      {
        title: "Configuration",
        collapsable: false,
        children: [
          ["/configuration/directory", "Themes directory"],
          ["/configuration/assets", "Public assets path"],
          ["/configuration/fallback-theme", "Fallback theme"]
        ]
      }
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}