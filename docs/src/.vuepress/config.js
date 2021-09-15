const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'B𝕏 | BootstrapX',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Issues',
        link: 'https://github.com/webcored/bootstrap-x/projects/1'
      },
      {
        text: 'Roadmap',
        link: 'https://github.com/webcored/bootstrap-x/projects/1'
      },
      {
        text: 'Github',
        link: 'https://github.com/webcored/bootstrap-x'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 1,
      },
      {
        title: 'Components',
        children: [
          { title: 'B𝕏 Alert', path: '/components/bx-alert' },
          { title: 'B𝕏 Badge', path: '/components/bx-badge' },
          { title: 'B𝕏 Breadcrumbs', path: '/components/bx-breadcrumb' },
          { title: 'B𝕏 Button', path: '/components/bx-button' },
          { title: 'B𝕏 Spinner', path: '/components/bx-spinner' },
        ]
      },
      {
        title: 'Layouts',
        children: [
          { title: 'B𝕏 Container', path: '/layouts/bx-container' },
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-CFB8DMW53J' // UA-00000000-0
      }
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
