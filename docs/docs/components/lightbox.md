---
title: Lightbox
description: Vue Axentix lightbox component
---

# Lightbox

## Basic lightbox

Create a simple lightbox using the `ax-lightbox` tag.  
The `responsive` prop allows you to get a responsive image while the lightbox is closed.

<template>
  <ax-lightbox
    v-model="lightbox"
    responsive
    src="https://picsum.photos/1280/720?random=1"
  ></ax-lightbox>
</template>

**template**

```html
<ax-lightbox v-model="lightbox" responsive src="https://picsum.photos/1280/720?random=1"></ax-lightbox>
```

**script**

```js
export default {
  data() {
    return {
      lightbox: false,
    };
  },
};
```

# Lightbox

## Lightbox with caption

You can use the `caption` prop to set a caption text.  
It will be shown at the bottom of the screen once the lightbox opened.

<template>
  <ax-lightbox
    v-model="lightbox2"
    responsive
    caption="Lightbox caption"
    src="https://picsum.photos/1280/720?random=2"
  ></ax-lightbox>
</template>

**template**

```html
<ax-lightbox
  v-model="lightbox"
  responsive
  caption="Lightbox caption"
  src="https://picsum.photos/1280/720?random=2"
></ax-lightbox>
```

## Options

| Option     | Default value | Description                                             |
| ---------- | ------------- | ------------------------------------------------------- |
| responsive | false         | Makes the image responsive while the lightbox is closed |
| caption    | ''            | Lightbox caption text                                   |

## Events

| Option  | Description                                       |
| ------- | ------------------------------------------------- |
| @setup  | Event triggered once the lightbox has been setup  |
| @open   | Event triggered once the lightbox starts to open  |
| @opened | Event triggered once the lightbox has been opened |
| @close  | Event triggered once the lightbox starts to close |
| @closed | Event triggered once the lightbox has been closed |

<script>
  export default {
    data() {
      return {
        lightbox: false,
        lightbox2: false
      }
    }
  }
</script>
