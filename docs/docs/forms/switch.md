---
title: Switch
description: Vue Axentix form switch
---

# Switch

## Basic switch

A switch default content is the truthy value text.  
Set the falsy value text using the `false-value` slot.

<template>
  <ax-form>
    <ax-form-field default>
      <ax-form-switch>
        <template #false-value>Off</template>
        On
      </ax-form-switch>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form>
  <ax-form-field default>
    <ax-form-switch>
      <template #false-value>Off</template>
      On
    </ax-form-switch>
  </ax-form-field>
</ax-form>
```

**Slots**

| Slot         | Description                   |
| ------------ | ----------------------------- |
| #false-value | Contains the falsy value text |
