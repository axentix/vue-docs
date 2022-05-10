---
title: Select
description: Vue Axentix form select
---

# Select

## Simple data

Create a simple `select` using the `<ax-form-select>` tag inside a `<ax-form>` tag.  
You can use data as simple as a string array to make it work, the selected value will be accessible through the `v-model` value.

<template>
  <ax-form material>
    <ax-form-field label="Choose an option">
      <ax-form-select :items="items" v-model="selectedValue"></ax-form-select>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Choose an option">
    <ax-form-select :items="items" v-model="selectedValue"></ax-form-select>
  </ax-form-field>
</ax-form>
```

**script**

```js
export default {
  data() {
    return {
      items: ['Car', 'Moto'],
      selectedValue: '',
    };
  },
};
```

## Detailed data

You can add details to the data using some of the principal attributes like `disabled` or `selected`.

<template>
  <ax-form material>
    <ax-form-field label="Choose an option">
      <ax-form-select :items="detailedItems" v-model="selectedValue"></ax-form-select>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Choose an option">
    <ax-form-select :items="detailedItems" v-model="selectedValue"></ax-form-select>
  </ax-form-field>
</ax-form>
```

**script**

```js
export default {
  data() {
    return {
      detailedItems: [
        { name: 'Car', value: 0, disabled: false, selected: false },
        { name: 'Moto', value: 1, disabled: false, selected: true },
        { name: 'Other', value: 2, disabled: true, selected: false },
      ],
      selectedValue: '',
    };
  },
};
```

## Multiple select

To use a **multiple select** form, just add the `multiple` keyword to your `<ax-form-select>` tag.  
Your `v-model` value type must be an array.

<template>
  <ax-form material>
    <ax-form-field label="Choose multiple options">
      <ax-form-select :items="items" multiple v-model="multipleSelectedValue"> 
      </ax-form-select>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Choose multiple options">
    <ax-form-select :items="items" multiple v-model="multipleSelectedValue"> </ax-form-select>
  </ax-form-field>
</ax-form>
```

**script**

```js
export default {
  data() {
    return {
      items: ['Car', 'Moto'],
      multipleSelectedValue: '',
    };
  },
};
```

## Multiple select with chips

Just add the `chips` keyword to your select tag to get **selected values as chips** and `chips-closable` to make them closables.

<template>
  <ax-form material>
    <ax-form-field label="Choose multiple options">
      <ax-form-select :items="items" multiple v-model="multipleSelectedValue2" chips chips-closable> 
      </ax-form-select>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form material>
  <ax-form-field label="Choose multiple options">
    <ax-form-select :items="items" multiple v-model="multipleSelectedValue" chips chips-closable></ax-form-select>
  </ax-form-field>
</ax-form>
```

```js
export default {
  data() {
    return {
      items: ['Car', 'Moto'],
      multipleSelectedValue: '',
    };
  },
};
```

## Options

| Option         | Default value | Description                                                                            |
| -------------- | ------------- | -------------------------------------------------------------------------------------- |
| multiple       | false         | Set the ability to select multiple values                                              |
| chips          | false         | Set the selected values style inside of the input                                      |
| chips-closable | false         | Add a cross to delete the chips directly inside of the input                           |
| single-line    | false         | Set the ability to the selected values to be ellipsed when overlapping the input width |
| close-on-click | true          | Closes the select once a value has been selected (not for multiple select)             |

<script>
  export default {
    data() {
      return {
        items: [
          'Car', 'Moto'
        ],
        detailedItems: [
          { name: 'Car', value: 0, disabled: false, selected: false },
          { name: 'Moto', value: 1, disabled: false, selected: true },
          { name: 'Other', value: 2, disabled: true, selected: false },
        ],
        selectedValue: '',
        multipleSelectedValue: [],
        multipleSelectedValue2: [],
      }
    }
  }
</script>
