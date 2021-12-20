module.exports = {
  themeConfig: {
    logo: '/img/axentix.svg',
    sidebarDepth: 0,
    sidebar: [
      '/',
      '/getting-started',
      {
        title: 'Components',
        children: [
          '/docs/components/buttons',
          '/docs/components/button-groups',
          '/docs/components/collapsible',
          '/docs/components/dropdown',
          '/docs/components/modal',
          '/docs/components/pagination',
          '/docs/components/sidenav',
          '/docs/components/tab',
          '/docs/components/tooltip',
        ],
      }
    ]
  }
}