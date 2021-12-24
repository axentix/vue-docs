---
title: Tooltip
description: Vue Axentix tooltip component
---

# Tooltip

## Basic tooltip

Create a basic **tooltip** using the `<ax-tooltip>` tag wrapping the HTML you want to be tooltipped.  
Use the `content` prop to set the text inside of it.

<template>
  <ax-tooltip content="Tooltip !">
    <ax-btn class="airforce dark-1 rounded-1 shadow-1">Hover me !</ax-btn>
  </ax-tooltip>
</template>

**Template**

```html
<ax-tooltip content="Tooltip !">
  <ax-btn class="airforce dark-1 rounded-1 shadow-1">Hover me !</ax-btn>
</ax-tooltip>
```

## Tooltip position

Set the tooltip poisition using the `position` prop.

<template>
  <ax-tooltip position="right" content="Tooltip !">
    <ax-btn class="airforce dark-1 rounded-1 shadow-1">Right tooltip</ax-btn>
  </ax-tooltip>
</template>

**Template**

```html
<ax-tooltip position="right" content="Tooltip !">
  <ax-btn class="airforce dark-1 rounded-1 shadow-1">Right tooltip</ax-btn>
</ax-tooltip>
```

## Options

| Option            | Default value                    | Description                                                          |
| ----------------- | -------------------------------- | -------------------------------------------------------------------- |
| content           | ""                               | Tooltip content                                                      |
| position          | "top"                            | Tooltip position (either `"top"`, `"bottom"`, `"left"` or `"right"`) |
| classes           | "grey dark-4 light-shadow-2 p-2" | Tooltip classes                                                      |
| animationDuration | 200                              | Set the animation duration of the tooltip                            |
| animationDelay    | 0                                | Delay before the tooltip is triggered                                |
| offset            | 10                               | Px amount between the tooltip and the wrapped component              |

## Events

| Option | Description                                       |
| ------ | ------------------------------------------------- |
| @init  | Event triggered once the tooltip has been created |
| @show  | Event triggered once the tooltip is shown         |
| @hide  | Event triggered once the tooltip is hidden        |
