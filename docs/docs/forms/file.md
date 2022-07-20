---
title: Form file
description: Vue Axentix form file
---

# Form fwitch

## Basic form file

Create a form file using the `ax-form-file` tag.  
Set the label using the `label` prop and its classes using the `label-classes` prop.

<ax-form-file label="Upload" label-classes="btn airforce dark-1 rounded-1"></ax-form-file>

**template**

```html
<ax-form-file label="Upload" label-classes="btn airforce dark-1 rounded-1"></ax-form-file>
```

## Multiple form file

Allow multiple files to be imported adding the `multiple` prop.

<ax-form-file multiple label="Upload files" label-classes="btn airforce dark-1 rounded-1"></ax-form-file>

```html
<ax-form-file multiple label="Upload files" label-classes="btn airforce dark-1 rounded-1"></ax-form-file>
```
## Options

| Option        | Default value | Description                              |
| ------------- | ------------- | ---------------------------------------- |
| label         | ''            | Set the label text                       |
| label-classes | ''            | Set the label classes                    |
| multiple      | false         | Set the ability to select multiple files |
