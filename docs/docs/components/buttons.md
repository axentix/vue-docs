---
title: Buttons
description: Vue Axentix button component
---

# Buttons

## Basic buttons

Create basic buttons with the `<ax-btn>` tag.

<ax-btn class="primary rounded-1">Button</ax-btn>

```html
<ax-btn class="primary rounded-1">Button</ax-btn>
```

## Button sizes

Change the button size using the `size` property.

<ax-btn size="small" class="primary rounded-1">Button</ax-btn>
<ax-btn class="primary rounded-1 mx-3">Button</ax-btn>
<ax-btn size="large" class="primary rounded-1">Button</ax-btn>

```html
<ax-btn size="small" class="primary rounded-1">Button</ax-btn>
<ax-btn class="primary rounded-1">Button</ax-btn>
<ax-btn size="large" class="primary rounded-1">Button</ax-btn>
```

## Circle buttons

Change the button type to circle using the `circle` property.  
This example is using material design icons with the <a target="_blank" href="https://github.com/therufa/mdi-vue">mdi-vue</a> library.  

<template>
  <ax-btn circle class="primary rounded-1 d-flex">
    <mdicon class="d-flex m-auto" name="pen"/>
  </ax-btn>
</template>

```html
<ax-btn circle class="primary rounded-1 d-flex">
  <mdicon class="d-flex m-auto" name="pen"/>
</ax-btn>
```

## Press buttons

Change the button type to press using the `press` property.

<ax-btn press class="primary rounded-1">Button</ax-btn>

```html
<ax-btn press class="primary rounded-1">Button</ax-btn>
```

## Outline buttons

You have to set a `text-{color}` class to make outline buttons work.  
Please refer to the <a href="https://useaxentix.com/2.0.x/docs/general/colors/" target="_blank">color palette</a> to choose a color.

### Normal outline buttons

Change the button type to outline using the `outline` property.

<ax-btn outline class="text-airforce rounded-1 rounded-1">Button</ax-btn>

```html
<ax-btn outline class="text-airforce rounded-1 rounded-1">Button</ax-btn>
```

### Opening outline buttons

Change the button type to opening using the `outline` & `outline-opening` properties.

<ax-btn outline outline-opening class="text-airforce rounded-1 rounded-1">Button</ax-btn>

```html
<ax-btn outline outline-opening class="text-airforce rounded-1 rounded-1">Button</ax-btn>
```

### Invert outline buttons

Outline invert buttons are used for light colors, so when you want the text to become black instead of white.  
Change the button type to opening using the `outline` & `outline-invert` properties.

<ax-btn outline outline-invert class="text-airforce text-light-2 rounded-1 rounded-1">Button</ax-btn>

```html
<ax-btn outline outline-invert class="text-airforce text-light-2 rounded-1 rounded-1">Button</ax-btn>
```

## Disabled buttons

Change the button type to disabled using the `disabled` property.

<ax-btn disabled class="primary rounded-1">Button</ax-btn>

```html
<ax-btn disabled class="primary rounded-1">Button</ax-btn>
```