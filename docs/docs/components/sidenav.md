---
title: Sidenav
description: Vue Axentix sidenav component
---

# Sidenav

## Basic sidenav

Create a sidenav using the `<ax-sidenav>` tag.  
To open it, add a `v-model` and toggle it using an event as `@click` on the element you want.  
Use `<ax-sidenav-link>` component to create links in the sidenav.

<ax-btn class="primary rounded-1" @click="isSidenavOpened = !isSidenavOpened">Trigger sidenav</ax-btn>

<template>
  <ax-sidenav v-model="isSidenavOpened" class="white shadow-1">
    <ax-sidenav-link>Link 1</ax-sidenav-link>
    <ax-sidenav-link>Link 2</ax-sidenav-link>
    <ax-sidenav-link>Link 3</ax-sidenav-link>
  </ax-sidenav>
</template>

**Template**

```html
<ax-btn class="primary rounded-1" @click="isSidenavOpened = !isSidenavOpened">Trigger sidenav</ax-btn>

<ax-sidenav v-model="isSidenavOpened" class="white shadow-1">
  <ax-sidenav-link>Link 1</ax-sidenav-link>
  <ax-sidenav-link>Link 2</ax-sidenav-link>
  <ax-sidenav-link>Link 3</ax-sidenav-link>
</ax-sidenav>
```

**Script**

```js
export default {
  data() {
    return {
      isSidenavOpened: false,
    };
  },
};
```

## Sidenav router-links

To use vue-router links, just use the `tag` prop of the `<ax-sidenav-link>` component.  
If you want to get an **active sidenav link**, just use the `active` prop.

```html
<ax-btn class="primary rounded-1" @click="isSidenavOpened = !isSidenavOpened">Trigger sidenav</ax-btn>

<ax-sidenav v-model="isSidenavOpened" class="white shadow-1">
  <ax-sidenav-link tag="router-link" :active="true" to="/">Router-link 1</ax-sidenav-link>
  <ax-sidenav-link tag="router-link" to="/">Router-link 2</ax-sidenav-link>
  <ax-sidenav-link tag="router-link" to="/">Router-link 3</ax-sidenav-link>
</ax-sidenav>
```

## Sidenav slots

Use the named slots of the `<ax-sidenav>` to append placed content into it.  
To use Vue named slots, use the `<template #{slotName}>` tag with the slot name.

<ax-btn class="primary rounded-1" @click="isSidenavOpened2 = !isSidenavOpened2">Trigger sidenav</ax-btn>

<template>
  <ax-sidenav v-model="isSidenavOpened2" class="white shadow-1">
    <template #header>Sidenav header</template>
    <ax-sidenav-link>Link 1</ax-sidenav-link>
    <ax-sidenav-link>Link 2</ax-sidenav-link>
    <ax-sidenav-link>Link 3</ax-sidenav-link>
    <template #footer>Sidenav footer</template>
  </ax-sidenav>
</template>

**Template**

```html
<ax-sidenav v-model="isSidenavOpened2" class="white shadow-1">
  <template #header>Sidenav header</template>

  <ax-sidenav-link>Link 1</ax-sidenav-link>
  <ax-sidenav-link>Link 2</ax-sidenav-link>
  <ax-sidenav-link>Link 3</ax-sidenav-link>

  <template #footer>Sidenav footer</template>
</ax-sidenav>
```

**Script**

```js
export default {
  data() {
    return {
      isSidenavOpened2: false,
    };
  },
};
```

**Options**

| Slot    | Description                      |
| ------- | -------------------------------- |
| #header | Contains the sidenav-header HTML |
| #footer | Contains the sidenav-footer HTML |

## Sidenav collapsibles

Create collapsibles in the sidenav to wrap `sidenav-link` by group.  
Trigger it with another `sidenav-link` and a `@click` event for example.

<ax-btn class="primary rounded-1" @click="isSidenavOpened3 = !isSidenavOpened3">Trigger sidenav</ax-btn>

<template>
  <ax-sidenav v-model="isSidenavOpened3" class="white shadow-1">
    <template #header>Sidenav header</template>
    <ax-sidenav-link :active="isCollapsibleOpened" @click="isCollapsibleOpened = !isCollapsibleOpened"> 
      Click me !
    </ax-sidenav-link>
    <ax-collapsible v-model="isCollapsibleOpened">
      <ax-sidenav-link>Link 1</ax-sidenav-link>
      <ax-sidenav-link>Link 2</ax-sidenav-link>
    </ax-collapsible>
  </ax-sidenav>
</template>

**Template**

```html
<ax-btn class="primary rounded-1" @click="isSidenavOpened3 = !isSidenavOpened3">Trigger sidenav</ax-btn>

<ax-sidenav v-model="isSidenavOpened3" class="white shadow-1">
  <template #header>Sidenav header</template>
  <ax-sidenav-link :active="isCollapsibleOpened" @click="isCollapsibleOpened = !isCollapsibleOpened"> 
    Click me !
  </ax-sidenav-link>
  <ax-collapsible v-model="isCollapsibleOpened">
    <ax-sidenav-link>Link 1</ax-sidenav-link>
    <ax-sidenav-link>Link 2</ax-sidenav-link>
  </ax-collapsible>
</ax-sidenav>
```

**Script**

```js
export default {
  data() {
    return {
      isSidenavOpened3: false,
      isCollapsibleOpened: false
    }
  }
}
```

## Options

| Option            | Default value | Description                                            |
| ----------------- | ------------- | ------------------------------------------------------ |
| overlay           | true          | Enable the sidenav overlay                             |
| bodyScrolling     | false         | Enable the body scrolling while sidenav is opened      |
| animationDuration | 300           | Set the animation duration of the sidenav              |
| fixed             | false         | Fix the sidenav on the screen side for any screen size |
| rightAligned      | false         | Sets the sidenav side to the right of the screen       |

## Events

| Option  | Description                                      |
| ------- | ------------------------------------------------ |
| @setup  | Event triggered once the sidenav has been setup  |
| @open   | Event triggered once the sidenav starts to open  |
| @opened | Event triggered once the sidenav has been opened |
| @close  | Event triggered once the sidenav starts to close |
| @closed | Event triggered once the sidenav has been closed |

<script>
export default {
  data() {
    return {
      isSidenavOpened: false,
      isSidenavOpened2: false,
      isSidenavOpened3: false,
      isCollapsibleOpened: false
    }
  }
}
</script>
