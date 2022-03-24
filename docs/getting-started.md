---
title: Getting started
---

# Getting started

## Installation

Vue Axentix is **compatible** with **both Vue 3 & Vue 2**.  
Still, the installation has different steps depending on your Vue version.

### Vue 3

Npm installation

```sh
npm i @axentix/vue
```

main.js imports

```js
import { createApp } from 'vue';
import VueAxentix from '@axentix/vue';
import '@axentix/vue/dist/vue3/vue-axentix.css';

const app = createApp(App);
app.use(VueAxentix);
```

### Vue 2

Npm installation

```sh
npm i @axentix/vue
npm i @vue/composition-api
```

main.js imports

```js
import Vue from 'vue';
import VueAxentix from '@axentix/vue';
import VueCompositionAPI from '@vue/composition-api';
import '@axentix/vue/dist/vue2/vue-axentix.css';

Vue.use(VueCompositionAPI);
Vue.use(VueAxentix);
```