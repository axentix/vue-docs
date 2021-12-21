---
title: Button groups
description: Vue Axentix button group component
---

# Button groups

## Basic button groups

Create basic button groups with the `<ax-btn-group>` element wrapping `<ax-btn>` tags.

<template>
  <ax-btn-group>
    <ax-btn class="primary">Button</ax-btn>
    <ax-btn class="primary">Button</ax-btn>
  </ax-btn-group>
</template>

```html
<ax-btn-group>
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
</ax-btn-group>
```

## Button group sizes

Change the button group component size using the `size` property.

<template>
  <ax-btn-group size="small">
    <ax-btn class="primary">Button</ax-btn>
    <ax-btn class="primary">Button</ax-btn>
  </ax-btn-group>
</template>

<template>
  <ax-btn-group size="large" class="mt-3">
    <ax-btn class="primary">Button</ax-btn>
    <ax-btn class="primary">Button</ax-btn>
  </ax-btn-group>
</template>

```html
<ax-btn-group size="small">
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
</ax-btn-group>

<ax-btn-group size="large">
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
</ax-btn-group>
```

## Vertical button groups

Create vertical button groups using the `vertical` property.

<template>
  <ax-btn-group vertical>
    <ax-btn class="primary">Button</ax-btn>
    <ax-btn class="primary">Button</ax-btn>
    <ax-btn class="primary">Button</ax-btn>
  </ax-btn-group>
</template>
  
```html
<ax-btn-group vertical>
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
</ax-btn-group>
```

## Button group style

Style your buttons using utilities directly on the `<ax-btn-group>` element.

<template>
  <div class="d-flex">
    <ax-btn-group vertical class="rounded-1 shadow-1 mr-3">
      <ax-btn class="primary">Button</ax-btn>
      <ax-btn class="primary">Button</ax-btn>
      <ax-btn class="primary">Button</ax-btn>
    </ax-btn-group>
    <ax-btn-group class="rounded-1 shadow-1">
      <ax-btn class="primary">Button</ax-btn>
      <ax-btn class="primary">Button</ax-btn>
      <ax-btn class="primary">Button</ax-btn>
    </ax-btn-group>
  </div>
</template>
  
```html
<ax-btn-group vertical class="rounded-1 shadow-1">
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
</ax-btn-group>

<ax-btn-group class="rounded-1 shadow-1">
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
  <ax-btn class="primary">Button</ax-btn>
</ax-btn-group>
```

## Outline button groups

Create outline button groups using outline `<ax-btn>` elements.  
To create outline buttons, refer to the [foo](/docs/components/buttons) page.

<template>
  <ax-btn-group class="rounded-1">
    <ax-btn outline class="text-primary">Button</ax-btn>
    <ax-btn outline class="text-primary">Button</ax-btn>
    <ax-btn outline class="text-primary">Button</ax-btn>
  </ax-btn-group>
</template>

```html
<ax-btn-group class="rounded-1">
  <ax-btn outline class="text-primary">Button</ax-btn>
  <ax-btn outline class="text-primary">Button</ax-btn>
  <ax-btn outline class="text-primary">Button</ax-btn>
</ax-btn-group>
```
