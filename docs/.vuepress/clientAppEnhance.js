import { defineClientAppEnhance } from '@vuepress/client';
import vueAxentix from '@axentix/vue';
import 'axentix/dist/axentix.min.css';
import '@axentix/vue/dist/vue3/vue-axentix.css';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(vueAxentix);
});
