module.exports = {
  lang: 'en-US',
  title: '',
  description: '',
  bundler: '@vuepress/bundler-vite',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon-32x32.png' }],
    [
      'link',
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css' },
    ],
  ],
  themeConfig: {
    logo: 'images/axentix.svg',
    contributors: false,
    lastUpdated: false,
    sidebar: [
      {
        text: 'Buttons',
        link: '/buttons/',
      },
    ],
  },
};
