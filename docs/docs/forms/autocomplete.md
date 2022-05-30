---
title: Autocomplete
description: Vue Axentix form autocomplete
---

# Autocomplete

## Simple data

Create a simple `autocomplete` using the `<ax-form-autocomplete>` tag inside a `<ax-form>` tag.  
You can use data as simple as a string array to make it work, the selected value will be accessible through the `v-model` value.  
<br>
*Type to try the autocomplete*

<template>
  <ax-form material>
    <ax-form-field label="Autocomplete">
      <ax-form-autocomplete
        :items="items"
        v-model="selectedValue"
      >
      </ax-form-autocomplete>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Autocomplete">
    <ax-form-autocomplete
      :items="items"
      v-model="selectedValue"
    >
    </ax-form-autocomplete>
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
    <ax-form-field label="Autocomplete">
      <ax-form-autocomplete
        :items="detailedItems"
        v-model="selectedValue"
      >
      </ax-form-autocomplete>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Autocomplete">
    <ax-form-autocomplete
      :items="detailedItems"
      v-model="selectedValue"
    >
    </ax-form-autocomplete>
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

## Multiple autocomplete

To use a **multiple autocomplete** form, just add the `multiple` keyword to your `<ax-form-autocomplete>` tag.  
Your `v-model` value type must be an array.

<template>
  <ax-form material>
    <ax-form-field label="Choose multiple options">
      <ax-form-autocomplete :items="items" multiple v-model="multipleSelectedValue"> 
      </ax-form-autocomplete>
    </ax-form-field>
  </ax-form>
</template>

**template**

```html
<ax-form material>
  <ax-form-field label="Choose multiple options">
    <ax-form-autocomplete :items="items" multiple v-model="multipleSelectedValue"> 
    </ax-form-autocomplete>
  </ax-form-field>
</ax-form>
```

**script**

```js
export default {
  data() {
    return {
      items: ['Car', 'Moto'],
      multipleSelectedValue: [],
    };
  },
};
```

## Multiple autocomplete with chips

Just add the `chips` keyword to your autocomplete tag to get **selected values as chips** and `chips-closable` to make them closables.

<template>
  <ax-form material>
    <ax-form-field label="Choose multiple options">
      <ax-form-autocomplete :items="items" multiple v-model="multipleSelectedValue2" chips chips-closable> 
      </ax-form-autocomplete>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form material>
  <ax-form-field label="Choose multiple options">
    <ax-form-autocomplete :items="items" multiple v-model="multipleSelectedValue" chips chips-closable> 
    </ax-form-autocomplete>
  </ax-form-field>
</ax-form>
```

```js
export default {
  data() {
    return {
      items: ['Car', 'Moto'],
      multipleSelectedValue: [],
    };
  },
};
```

## Autocomplete slots

Use the named slots of the `<ax-autocomplete>` to append placed content into it.  
To use Vue named slots, use the `<template #{slotName}>` tag with the slot name.

<template>
  <ax-form material>
    <ax-form-field label="Autocomplete">
      <ax-form-autocomplete
        :items="items"
        :rules="[rules.required]"
        multiple
        chips
        chips-closable
        v-model="multipleSelectedValue3"
      >
        <template #prepend="{ toggle }">
          <div @click.prevent="selectAll(toggle)" class="form-select-item">Select all</div>
        </template>
      </ax-form-autocomplete>
    </ax-form-field>
  </ax-form>
</template>

```html
<ax-form material>
  <ax-form-field label="Autocomplete">
    <ax-form-autocomplete
      :items="items"
      :rules="[rules.required]"
      multiple
      chips
      chips-closable
      v-model="multipleSelectedValue"
    >
    <!-- prepend & append expose the toggle method to close the autocomplete -->
      <template #prepend="{ toggle }"> 
        <div @click.prevent="selectAll(toggle)" class="form-select-item">Select all</div>
      </template>
    </ax-form-autocomplete>
  </ax-form-field>
</ax-form>
```

```js
export default {
  data() {
    return {
      items: ['Car', 'Moto'],
      multipleSelectedValue: [],
    };
  },
  methods: {
    selectAll(toggle) {
      this.multipleSelectedValue = this.multipleSelectedValue.length > 0 ? [] : this.items;
      toggle(false);
    },
  }
};
```

**Options**

| Slot     | Description                               |
| -------- | ----------------------------------------- |
| #prepend | Contains the first autocomplete item HTML |
| #apend   | Contains the last autocomplete item HTML  |

## Options

| Option         | Default value | Description                                                                            |
| -------------- | ------------- | -------------------------------------------------------------------------------------- |
| multiple       | false         | Set the ability to select multiple values                                              |
| chips          | false         | Set the selected values style inside of the input                                      |
| chips-closable | false         | Add a cross to delete the chips directly inside of the input                           |
| single-line    | false         | Set the ability to the selected values to be ellipsed when overlapping the input width |
| close-on-click | true          | Closes the autocomplete once a value has been selected (not for multiple autocomplete) |

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
        selectedValue2: '',
        multipleSelectedValue: [],
        multipleSelectedValue2: [],
        multipleSelectedValue3: [],
        rules: {
          required: (v) => v.length > 0 || 'Required.',
        },
      }
    },
    methods: {
      selectAll(toggle) {
        this.multipleSelectedValue3 = this.multipleSelectedValue3.length > 0 ? [] : this.items;
        toggle(false);
      },
    }
  }
</script>
