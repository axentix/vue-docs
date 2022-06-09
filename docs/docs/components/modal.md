---
title: Modal
description: Vue Axentix modal component
---

# Modal

## Basic modal

Create a modal using the `<ax-modal>` tag.  
To open it, add a `v-model` and toggle it using an event as `@click` on the element you want.

<ax-btn class="primary rounded-1" @click="isModalOpened = !isModalOpened">Trigger modal</ax-btn>

<template>
  <ax-modal class="white rounded-1 shadow-1" v-model="isModalOpened">
    This is the modal content
  </ax-modal>
</template>

**Template**

```html
<ax-btn class="primary rounded-1" @click="isModalOpened = !isModalOpened">Trigger modal</ax-btn>

<ax-modal class="white rounded-1 shadow-1" v-model="isModalOpened"> This is the modal content </ax-modal>
```

**Script**

```js
export default {
  data() {
    return {
      isModalOpened: false,
    };
  },
};
```

## Modal slots

Use the named slots of the `<ax-modal>` to append placed content into it.  
To use Vue named slots, use the `<template #{slotName}>` tag with the slot name.

<ax-btn class="primary rounded-1" @click="isModalOpened2 = !isModalOpened2">Trigger modal</ax-btn>

<template>
  <ax-modal class="white rounded-1 shadow-1" v-model="isModalOpened2">
    <template #header>
      Header
    </template>
    This is the modal content
    <template #footer>
      Footer
    </template>
  </ax-modal>
</template>

**Template**

```html
<ax-modal class="white rounded-1 shadow-1" v-model="isModalOpened2">
  <template #header> Header </template>
  This is the modal content
  <template #footer> Footer </template>
</ax-modal>
```

**Script**

```js
export default {
  data() {
    return {
      isModalOpened2: false,
    };
  },
};
```

**Options**

| Slot    | Description                    |
| ------- | ------------------------------ |
| #header | Contains the modal-header HTML |
| #footer | Contains the modal-footer HTML |

## Modal animations

Create a modal animation using the `mode` property.

<ax-btn class="primary rounded-1" @click="fallingModal = !fallingModal">Falling modal</ax-btn>
<ax-btn class="primary rounded-1" @click="bouncingModal = !bouncingModal">Bouncing modal</ax-btn>

<template>
  <ax-modal class="white rounded-1 shadow-1" mode="falling" v-model="fallingModal">
    <template #header>
      Header
    </template>
    This is the falling modal content
    <template #footer>
      Footer
    </template>
  </ax-modal>
  <ax-modal class="white rounded-1 shadow-1" mode="bouncing" v-model="bouncingModal">
    <template #header>
      Header
    </template>
    This is the bouncing modal content
    <template #footer>
      Footer
    </template>
  </ax-modal>
</template>

**Template**

```html
<ax-btn class="primary rounded-1" @click="fallingModal = !fallingModal">Falling modal</ax-btn>
<ax-btn class="primary rounded-1" @click="bouncingModal = !bouncingModal">Bouncing modal</ax-btn>

<ax-modal class="white rounded-1 shadow-1" mode="falling" v-model="fallingModal">
  <template #header> Header </template>
  This is the falling modal content
  <template #footer> Footer </template>
</ax-modal>

<ax-modal class="white rounded-1 shadow-1" mode="bouncing" v-model="bouncingModal">
  <template #header> Header </template>
  This is the bouncing modal content
  <template #footer> Footer </template>
</ax-modal>
```

**Script**

```js
export default {
  data() {
    return {
      fallingModal: false,
      bouncingModal: false,
    };
  },
};
```

**Options**

| Mode       | Description              |
| ---------- | ------------------------ |
| ""         | Default modal animation  |
| "falling"  | Falling modal animation  |
| "bouncing" | Bouncing modal animation |

## Options

| Option            | Default value | Description                                     |
| ----------------- | ------------- | ----------------------------------------------- |
| mode              | ""            | Opening modal animation type                    |
| bodyScrolling     | false         | Enable the body scrolling while modal is opened |
| animationDuration | 400           | Set the animation duration of the modal         |
| overlay           | true          | Enable the modal overlay                        |

## Events

| Option  | Description                                    |
| ------- | ---------------------------------------------- |
| @setup  | Event triggered once the modal has been setup  |
| @open   | Event triggered once the modal starts to open  |
| @opened | Event triggered once the modal has been opened |
| @close  | Event triggered once the modal starts to close |
| @closed | Event triggered once the modal has been closed |

<script>
export default {
  data() {
    return {
      isModalOpened: false,
      isModalOpened2: false,
      fallingModal: false,
      bouncingModal: false
    }
  }
}
</script>
