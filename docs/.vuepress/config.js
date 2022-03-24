module.exports = {
  base: process.env.AX_BASE_URL ?? '/',
  title: 'VueAxentix',
  head: [['link', { rel: 'icon', href: '/img/axentix.svg' }]],
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
      },
    ],
  },
};