---
title: Pagination
description: Vue Axentix pagination component
---

# Pagination

## Basic pagination

Create a basic **pagination** using the `<ax-pagination>` tag.  
To make it work, you need to set it a `total` property.  
Set a v-model to make it reactive to your data.

<ax-pagination v-model="current" :total="50"></ax-pagination>

**template**

```html
<ax-pagination v-model="current" :total="50"></ax-pagination>
```

**script**

```js
export default {
  data() {
    return {
      current: 0,
    };
  },
};
```

## Pagination sizes

Change the **pagination** size using the `size` property.

<ax-pagination size="small" :total="30"></ax-pagination>
<ax-pagination size="large" :total="30"></ax-pagination>

```html
<ax-pagination size="small" :total="30"></ax-pagination> <ax-pagination size="large" :total="30"></ax-pagination>
```

## Wrapped pagination

Create an automatically wrapped **pagination** using the `per-page` & `max-visible` properties.  
This example means we have a total of 100 elements with 10 elements per page.  
The max-visible sets how many pages are visible in the **pagination component**.

<ax-pagination :max-visible="5" :per-page="10" :total="100" size="small"></ax-pagination>

```html
<ax-pagination :max-visible="5" :per-page="10" :total="100" size="small"></ax-pagination>
```

## Custom pagination

Every part of the pagination can be custom, either items and arrows.  
Just use the named slots and custom them.

Here is an example of totally custom pagination :

<template>
  <ax-pagination size="small" :max-visible="maxVisible" v-model="current" :total="15" :per-page="1">
    <template #first-arrow="{ goto, isDisabled }">
      <li
        class="txt-blue arrow pb-1 grey light-4 bd-solid bd-1 bd-grey bd-light-3"
        :class="{ disabled: isDisabled }"
        @click="goto(1)"
      >
        <a>&#8592;</a>
      </li>
    </template>
    <template #prev-arrow="{ prev, isDisabled }">
      <li
        class="txt-blue grey light-4 bd-solid bd-1 bd-grey bd-light-3"
        :class="{ disabled: isDisabled }"
        @click="prev"
      >
        <a>prev</a>
      </li>
    </template>
    <template #default="{ pageNumber, goto, isActive }">
      <li
        :class="isActive ? 'active' : 'grey light-4 bd-solid bd-1 bd-grey bd-light-3'"
        @click="goto(pageNumber)"
      >
        <a>{{ pageNumber }}</a>
      </li>
    </template>
    <template #next-arrow="{ next, isDisabled }">
      <li
        class="txt-blue grey light-4 bd-solid bd-1 bd-grey bd-light-3"
        :class="{ disabled: isDisabled }"
        @click="next"
      >
        <a>next</a>
      </li>
    </template>
    <template #last-arrow="{ goto, pageCount, isDisabled }">
      <li
        class="arrow txt-blue pb-1 grey light-4 bd-solid bd-1 bd-grey bd-light-3"
        :class="{ disabled: isDisabled }"
        @click="goto(pageCount)"
      >
        <a>&#8594;</a>
      </li>
    </template>
  </ax-pagination>
</template>

**template**

```html
<template>
  <ax-pagination size="small" :max-visible="maxVisible" v-model="current" :total="total" :per-page="perPage">
    <template #first-arrow="{ goto, isDisabled }">
      <li class="txt-blue arrow pb-1 grey light-4 bd-solid bd-1 bd-grey bd-light-3" :class="{ disabled: isDisabled }" @click="goto(1)">
        <a>&#8592;</a>
      </li>
    </template>

    <template #prev-arrow="{ prev, isDisabled }">
      <li class="txt-blue grey light-4 bd-solid bd-1 bd-grey bd-light-3" :class="{ disabled: isDisabled }" @click="prev">
        <a>prev</a>
      </li>
    </template>

    <template #default="{ pageNumber, goto, isActive }">
      <li :class="isActive ? 'active' : 'grey light-4 bd-solid bd-1 bd-grey bd-light-3'" @click="goto(pageNumber)">
        <a>{{ pageNumber }}</a>
      </li>
    </template>

    <template #next-arrow="{ next, isDisabled }">
      <li class="txt-blue grey light-4 bd-solid bd-1 bd-grey bd-light-3" :class="{ disabled: isDisabled }" @click="next">
        <a>next</a>
      </li>
    </template>

    <template #last-arrow="{ goto, pageCount, isDisabled }">
      <li
        class="arrow txt-blue pb-1 grey light-4 bd-solid bd-1 bd-grey bd-light-3"
        :class="{ disabled: isDisabled }"
        @click="goto(pageCount)"
      >
        <a>&#8594;</a>
      </li>
    </template>
  </ax-pagination>
</template>
```

**script**

```js
export default {
  data() {
    return {
      current: 0,
      maxVisible: 5,
      total: 150,
      perPage: 10,
    };
  },
};
```

## Options

| Option     | Default value | Description                                     |
| ---------- | ------------- | ----------------------------------------------- |
| total      | 0 (required)  | Total items to be paginated                     |
| perPage    | 10            | Item amount par page                            |
| maxVisible | 7             | Max pagination items visible                    |
| size       | ""            | Pagination size (either `"small"` or `"large"`) |

## Events

| Option | Description                                               |
| ------ | --------------------------------------------------------- |
| @prev  | Event triggered once the pagination prev method is called |
| @next  | Event triggered once the pagination next method is called |
| @goto  | Event triggered once the pagination goto method is called |


<script>
export default {
  data() {
    return {
      current: 0,
      maxVisible: 5,
      total: 150,
      perPage: 10
    }
  }
}
</script>
