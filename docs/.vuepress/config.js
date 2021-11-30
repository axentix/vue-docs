const { path } = require('@vuepress/utils');

module.exports = {
  lang: 'en-US',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',
  bundler: '@vuepress/bundler-vite',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
  theme: path.resolve(__dirname, '../../theme'),
};
