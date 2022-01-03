---
title: Dropdown
description: Vue Axentix dropdown component
---

# Dropdowns

## Basic dropdown

Create basic dropdowns with the `<ax-dropdown>` tag.  
Use the `<template #trigger>` slot for the dropdown trigger element.

<template>
  <ax-dropdown
    v-model="isDropdownOpened"
    @click="isDropdownOpened = !isDropdownOpened"
    content-classes="white shadow-1"
  >
    <template #trigger>
      <ax-btn class="airforce dark-1 text-white rounded-1">Dropdown</ax-btn>
    </template>
    <div class="dropdown-item">Dropdown-item</div>
    <div class="dropdown-item">Dropdown-item</div>
  </ax-dropdown>
</template>

**template**
```html
<ax-dropdown v-model="isDropdownOpened" @click="isDropdownOpened = !isDropdownOpened" content-classes="white shadow-1">
  <template #trigger>
    <ax-btn class="airforce dark-1 text-white rounded-1">Dropdown</ax-btn>
  </template>

  <div class="dropdown-item">Dropdown-item</div>
  <div class="dropdown-item">Dropdown-item</div>
</ax-dropdown>
```

**script**
```js
export default {
  data() {
    return {
      isDropdownOpened: false,
    }
  }
}
```

## Fade dropdown

Change the dropdown animation using the `animation-type` property.

<template>
  <ax-dropdown
    animation-type="fade"
    v-model="isDropdownOpened2"
    @click="isDropdownOpened2 = !isDropdownOpened2"
    content-classes="white shadow-1"
  >
    <template #trigger>
      <ax-btn class="airforce dark-1 text-white rounded-1">Dropdown</ax-btn>
    </template>
    <div class="dropdown-item">Dropdown-item</div>
    <div class="dropdown-item">Dropdown-item</div>
  </ax-dropdown>
</template>

```html
<ax-dropdown
  animation-type="fade"
  v-model="isDropdownOpened2"
  @click="isDropdownOpened2 = !isDropdownOpened2"
  content-classes="white shadow-1"
>
  <template #trigger>
    <ax-btn class="airforce dark-1 text-white rounded-1">Dropdown</ax-btn>
  </template>

  <div class="dropdown-item">Dropdown-item</div>
  <div class="dropdown-item">Dropdown-item</div>
</ax-dropdown>
```

**script**
```js
export default {
  data() {
    return {
      isDropdownOpened2: false,
    }
  }
}
```

## Options

| Option            | Default value | Description                                                          |
| ----------------- | ------------- | -------------------------------------------------------------------- |
| animationDuration | 300           | Set the animation duration of the dropdown                           |
| animationType     | 'none'        | Set the animation type of the dropdown (either `"fade"` or `"none"`) |
| constrainWidth    | false         | Constrain the width with the parent's one                            |
| contentClasses    | ''            | Classes to add to the `.dropdown-content` tag                        |
| preventViewport   | false         | Prevent the dropdown to overflow the browser page                    |
| autoClose         | true          | Automatically closes the other opened dropdowns                      |

## Events

| Option  | Description                                       |
| ------- | ------------------------------------------------- |
| @setup  | Event triggered once the dropdown has been setup  |
| @open   | Event triggered once the dropdown starts to open  |
| @opened | Event triggered once the dropdown has been opened |
| @close  | Event triggered once the dropdown starts to close |
| @closed | Event triggered once the dropdown has been closed |

<script>
export default {
  data() {
    return {
      isDropdownOpened: false,
      isDropdownOpened2: false,
    }
  }
}
</script>
