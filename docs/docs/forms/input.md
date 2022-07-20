---
title: Inputs
description: Vue Axentix form input
---

# Input

## Basic input

To choose the `input` tag, just add the `tag="input"` property.  
This way, a material input will be created.

<template>
  <ax-form material>
    <ax-form-field label="Test input">
      <ax-form-control tag="input" v-model="inputValue" type="text"></ax-form-control>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Test input">
    <ax-form-control tag="input" v-model="inputValue" type="text"></ax-form-control>
  </ax-form-field>
</ax-form>
```

**script**

```js
  export default {
    data() {
      return {
        inputValue: '',
      }
    }
  }
```

## Textareas

To choose the `textarea` tag, just add the `tag="textarea"` property.  
This way, a material textarea will be created.

<template>
  <ax-form material>
    <ax-form-field label="Textarea label">
      <ax-form-control v-model="areaContent" tag="textarea"></ax-form-control>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Textarea label">
    <ax-form-control v-model="areaContent" tag="textarea">Textarea content</ax-form-control>
  </ax-form-field>
</ax-form>
```

**script**

```js
  export default {
    data() {
      return {
        areaContent: '',
      }
    }
  }
```

<script>
  export default {
    data() {
      return {
        inputValue: '',
        areaContent: ''
      }
    },
  }
</script>
