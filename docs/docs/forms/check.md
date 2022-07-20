---
title: Checks
description: Vue Axentix form checks
---

# Checks

## Checkbox

To create a checkbox, use the `ax-form-check` tag with the `type="checkbox"`.

<template>
  <ax-form material>
    <ax-form-field>
      <ax-form-check type="checkbox" v-model="checked" @click.native="say">Ok</ax-form-check>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form material>
  <ax-form-field>
    <ax-form-check type="checkbox" v-model="checked" @click.native="say">Ok</ax-form-check>
  </ax-form-field>
</ax-form>
```

## Radios

To create radios, use the `ax-form-check` tag with the `type="radio"`.

<template>
  <ax-form material>
    <ax-form-field>
      <ax-form-check type="radio" name="answerRadio" v-model="radio" native-value="Answer 1">Answer 1</ax-form-check>
      <ax-form-check type="radio" name="answerRadio" v-model="radio" native-value="Answer 2">Answer 2</ax-form-check>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form material>
  <ax-form-field>
    <ax-form-check type="radio" name="answerRadio" v-model="radio" native-value="Answer 1">Answer 1</ax-form-check>
    <ax-form-check type="radio" name="answerRadio" v-model="radio" native-value="Answer 2">Answer 2</ax-form-check>
  </ax-form-field>
</ax-form>
```

### Full radios

Create full radios using the `full` prop.

<template>
  <ax-form material>
    <ax-form-field>
      <ax-form-check type="radio" name="answerRadio2" v-model="radio2" native-value="Answer 3" full>Answer 3</ax-form-check>
      <ax-form-check type="radio" name="answerRadio2" v-model="radio2" native-value="Answer 4" full>Answer 4</ax-form-check>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form material>
  <ax-form-field>
    <ax-form-check type="radio" name="answerRadio2" v-model="radio2" native-value="Answer 3" full>Answer 3</ax-form-check>
    <ax-form-check type="radio" name="answerRadio2" v-model="radio2" native-value="Answer 4" full>Answer 4</ax-form-check>
  </ax-form-field>
</ax-form>
```

<script>
  export default {
    data() {
      return {
        checked: '',
        radio: 'Answer 1',
        radio2: 'Answer 3'
      }
    }
  }
</script>
