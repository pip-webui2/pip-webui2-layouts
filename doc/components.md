[↑ Main contents](contents.md)

## Contents
* [Sidenav expander](#sidenav-expander)
* [Shadow](#shadow)

## Sidenav expander

This little component is using to toggle expanded state of sidenav. It will be displayed only for expandable views. To use it you should include `PipNavExpanderModule` into your module.

Inputs:
* `side` - set which sidenav should be toggled. Possible values is 'start' and 'end'. `'start'` is default value;
* `expandIcon` - set custom icon for 'expand' state. Default icon is `'chevron_right'`;
* `collapseIcon` - set custom icon for 'collapse' state. Default icon is `'chevron_left'`.

Example:
```html
<pip-nav-expander side="start"></pip-nav-expander>
```

## Shadow

`pip-shadow` component attaches shadow for your elements and containers. Provided by `PipShadowModule`.

Inputs:
* `attachmentSide` - side for shadow attachment. Possible values: 'left', 'right', 'top', 'bottom'.

Example:
```html
<pip-shadow visible="true" attachmentSide="top"></pip-shadow>
<pip-shadow visible="true" attachmentSide="left"></pip-shadow>
<pip-shadow visible="true" attachmentSide="right"></pip-shadow>
```