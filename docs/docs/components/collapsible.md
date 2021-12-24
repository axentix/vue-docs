---
title: Collapsible
description: Vue Axentix collapsible component
---

# Collapsible

## Basic collapsible

Create a basic collapsible using the `<ax-collapsible>` tag.

<ax-btn class="primary rounded-1 shadow-1 mb-3" @click="isCollapsibleOpened = !isCollapsibleOpened">Trigger collapsible</ax-btn>

<ax-collapsible v-model="isCollapsibleOpened">
  <div class="p-3 rounded-1 blue light-4 text-blue text-dark-3 bd-solid bd-blue bd-light-1 bd-1">This is a collapsed element</div>
</ax-collapsible>

**Template**

```html
<ax-btn class="primary rounded-1 shadow-1" @click="isCollapsibleOpened = !isCollapsibleOpened">Trigger collapsible</ax-btn>

<ax-collapsible v-model="isCollapsibleOpened">
  <div class="p-3 my-2 rounded-1 blue light-4 text-blue text-dark-3 bd-solid bd-blue bd-light-1 bd-1">This is a collapsed element</div>
</ax-collapsible>
```

**Script**

```js
export default {
  data() {
    return {
      isCollapsibleOpened: false,
    };
  },
};
```

## Options

| Option            | Default value | Description                                    |
| ----------------- | ------------- | ---------------------------------------------- |
| autoClose         | true          | Automatically closes other opened collapsibles |
| animationDuration | 300           | Set the animation duration of the modal        |

## Events

| Option | Description                                          |
| ------ | ---------------------------------------------------- |
| @setup | Event triggered once the collapsible has been setup  |
| @open  | Event triggered once the collapsible starts to open  |
| @close | Event triggered once the collapsible starts to close |

<script>
export default {
  data() {
    return {
      isCollapsibleOpened: false,
    }
  }
}
</script>
