---
title: Tabs
description: Vue Axentix tab component
---

# Tab

## Basic tab

Create a basic **tab** using the `<ax-tab>` tag.  
You can add a `v-model` to it if you want it to be reactive to your own changes.  
Use `<ax-tab-link>` component to create links to your `<ax-tab-item>` components.

<template>
  <ax-tab
    v-model="currentTab"
    class="shadow-1"
  >
  <template #menu>
    <ax-tab-link href="#tab1">Tab 1</ax-tab-link>
    <ax-tab-link href="#tab2">Tab 2</ax-tab-link>
    <ax-tab-link href="#tab3">Tab 3</ax-tab-link>
  </template>
  <ax-tab-item class="p-3" id="tab1">Content 1</ax-tab-item>
  <ax-tab-item class="p-3" id="tab2">Content 2</ax-tab-item>
  <ax-tab-item class="p-3" id="tab3">
    This tab content is longer but still not interesting.
  </ax-tab-item>
  </ax-tab>
</template>

**Template**

```html
<ax-tab v-model="currentTab" class="shadow-1">
  <template #menu>
    <ax-tab-link href="#tab1">Tab 1</ax-tab-link>
    <ax-tab-link href="#tab2">Tab 2</ax-tab-link>
    <ax-tab-link href="#tab3">Tab 3</ax-tab-link>
  </template>

  <ax-tab-item class="p-3" id="tab1">Content 1</ax-tab-item>
  <ax-tab-item class="p-3" id="tab2">Content 2</ax-tab-item>
  <ax-tab-item class="p-3" id="tab3"> This tab content is longer but still not interesting. </ax-tab-item>
</ax-tab>
```

**Script**

```js
export default {
  data() {
    return {
      currentTab: 0,
    };
  },
};
```

## Tab arrows

Using the `arrow` prop of the `<ax-tab>` component will create arrows to scroll between the `tab-link` components.  
Custom these arrows using the `<template #left-arrow>` & `<template #right-arrow>` slots.
**Resize your browser to see the arrows appear.**

<template>
  <ax-tab
    arrow
    v-model="currentTab"
    class="shadow-1"
  >
  <template #left-arrow>&lsaquo;</template>
  <template #right-arrow>&rsaquo;</template>
  <template #menu>
    <ax-tab-link href="#tab1">Tab 1</ax-tab-link>
    <ax-tab-link href="#tab2">Tab 2</ax-tab-link>
    <ax-tab-link href="#tab3">Long tab title to make arrows appear</ax-tab-link>
  </template>
  <ax-tab-item class="p-3" id="tab1">Content 1</ax-tab-item>
  <ax-tab-item class="p-3" id="tab2">Content 2</ax-tab-item>
  <ax-tab-item class="p-3" id="tab3">
    This tab content is longer but still not interesting.
  </ax-tab-item>
  </ax-tab>
</template>

**Template**

```html
<ax-tab arrow v-model="currentTab" class="shadow-1">
  <template #left-arrow>&lsaquo;</template>
  <template #right-arrow>&rsaquo;</template>

  <template #menu>
    <ax-tab-link href="#tab1">Tab 1</ax-tab-link>
    <ax-tab-link href="#tab2">Tab 2</ax-tab-link>
    <ax-tab-link href="#tab3">Tab 3</ax-tab-link>
  </template>

  <ax-tab-item class="p-3" id="tab1">Content 1</ax-tab-item>
  <ax-tab-item class="p-3" id="tab2">Content 2</ax-tab-item>
  <ax-tab-item class="p-3" id="tab3"> This tab content is longer but still not interesting. </ax-tab-item>
</ax-tab>
```

**Script**

```js
export default {
  data() {
    return {
      currentTab: 0,
    };
  },
};
```

## Full width tab

Using the `full-width` prop of the `<ax-tab>` component will make the `tab-link` components take the maximum width available.

<template>
  <ax-tab
    full-width
    v-model="currentTab"
    class="shadow-1"
  >
    <template #menu>
      <ax-tab-link href="#tab1">Tab 1</ax-tab-link>
      <ax-tab-link href="#tab2">Tab 2</ax-tab-link>
      <ax-tab-link href="#tab3">Tab 3</ax-tab-link>
    </template>
    <ax-tab-item class="p-3" id="tab1">Content 1</ax-tab-item>
    <ax-tab-item class="p-3" id="tab2">Content 2</ax-tab-item>
    <ax-tab-item class="p-3" id="tab3">
      This tab content is longer but still not interesting.
    </ax-tab-item>
  </ax-tab>
</template>

**Template**

```html
<ax-tab full-width v-model="currentTab" class="shadow-1">
  <template #menu>
    <ax-tab-link href="#tab1">Tab 1</ax-tab-link>
    <ax-tab-link href="#tab2">Tab 2</ax-tab-link>
    <ax-tab-link href="#tab3">Tab 3</ax-tab-link>
  </template>

  <ax-tab-item class="p-3" id="tab1">Content 1</ax-tab-item>
  <ax-tab-item class="p-3" id="tab2">Content 2</ax-tab-item>
  <ax-tab-item class="p-3" id="tab3"> This tab content is longer but still not interesting. </ax-tab-item>
</ax-tab>
```

**Script**

```js
export default {
  data() {
    return {
      currentTab: 0,
    };
  },
};
```

## Options

| Option            | Default value | Description                                            |
| ----------------- | ------------- | ------------------------------------------------------ |
| fullWidth         | false         | Makes the `tab-link` components take the maximum width |
| animationDuration | 300           | Set the animation duration of the tab                  |
| disableActiveBar  | false         | Disables the active bar                                |
| arrow             | false         | Enables the arrows to scroll between the tab-links     |
| prevClasses       | ""            | Sets the prev arrow classes                            |
| nextClasses       | ""            | Sets the next arrow classes                            |

## Events

| Option  | Description                                       |
| ------- | ------------------------------------------------- |
| @setup  | Event triggered once the tab has been setup       |
| @select | Event triggered once a tab is selected            |
| @opened | Event triggered once the lightbox has been opened |
| @close  | Event triggered once the lightbox starts to close |
| @closed | Event triggered once the lightbox has been closed |

<script>
export default {
  data() {
    return {
      currentTab: 0,
    }
  }
}
</script>
