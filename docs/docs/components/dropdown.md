---
title: Dropdown
description: Vue Axentix dropdown component
---

# Dropdowns

## Basic dropdown

Create basic dropdowns with the `<ax-dropdown>` tag.

<template>
  <ax-dropdown
    class="mr-2"
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
<ax-btn class="primary rounded-1">Button</ax-btn>
```
