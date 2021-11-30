const { path } = require('@vuepress/utils');

const axentixTheme = {
  name: 'vue-axentix-theme',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
};

module.exports = axentixTheme;
