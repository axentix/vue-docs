---
title: Inputs
description: Vue Axentix form input
---

# Input

## Basic input

<template>
  <ax-form material>
    <ax-form-field label="Test input">
      <ax-form-control tag="input" v-model="inputValue" type="text"></ax-form-control>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form material>
  <ax-form-field label="Test input">
    <ax-form-control tag="input" v-model="inputValue" type="text"></ax-form-control>
  </ax-form-field>
</ax-form>
```

<script>
  export default {
    data() {
      return {
        inputValue: '',
      }
    }
  }
</script>
