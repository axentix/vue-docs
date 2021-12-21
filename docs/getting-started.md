---
title: Getting started
---

# Getting started

## Installation

Vue Axentix is **compatible** with **both vue 3 & vue 2**.  
Still, the installation has different steps depending on your vue version.

### Vue 3

Npm installation

```sh
npm i @axentix/vue
```

main.js imports

```sh
import VueAxentix from '@axentix/vue';
import '@axentix/vue/dist/vue3/vue-axentix.css';

Vue.use(VueAxentix);
```

### Vue 2

Npm installation

```sh
npm i @axentix/vue
npm i @vue/composition-api
```

main.js imports

```sh
import VueAxentix from '@axentix/vue';
import VueCompositionAPI from '@vue/composition-api';
import '@axentix/vue/dist/vue2/vue-axentix.css';

Vue.use(VueCompositionAPI);
Vue.use(VueAxentix);
```