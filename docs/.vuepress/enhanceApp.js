import compositionAPI from '@vue/composition-api'
import VueAxentix from "@axentix/vue";
import 'axentix/dist/axentix.min.css';
import '@axentix/vue/dist/vue3/vue-axentix.css';
import mdiVue from 'mdi-vue/v2';
import { mdiPen } from '@mdi/js';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  Vue.use(compositionAPI);
  Vue.use(VueAxentix);
  Vue.use(mdiVue, {
      icons: {
        mdiPen
      }
    }
  )
}