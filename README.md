# @locaop/icon-picker

## Overview

![DEMO IMG](http://locaop.jp/cms/wp-content/uploads/2024/05/Component-Library-Development.gif)

[Icon Picker Demo](https://locaop-owner.github.io/locaop-react-icons-picker/)

@locaop/icon-picker is a strongly typed React Icons picker for font-awesome icons. It contains both a picker component and an icon renderer.

Includes all icons:
[Font Awesome 5](https://react-icons.github.io/react-icons/icons/fa/)

Mainly includes social icons:
[Phosphor Icons](https://react-icons.github.io/react-icons/icons/pi/)

I feel like an icon picker is a pretty common requirement so I was surprised to find a lack of sufficient icon pickers in the React Ecosystem. The existing ones I found were not that great. As a result, I decided to roll my own.

## Installation

To use this library, you need to have `react`, `react-dom`, and `@emotion/react` installed in your project.

```sh
npm install react react-dom @emotion/react @locaop/icon-picker
```
or yarn

```sh
npm install react react-dom @emotion/react @locaop/icon-picker
```

Install via npm

```sh
npm i @locaop/icon-picker
```

or yarn

```sh
yarn add @locaop/icon-picker
```

## Usage

The IconPicker component is just like any other picker component. The value prop is the icon that is displayed on the picker. When a new icon is selected, the onChange handler is fired.

```react
import * as React from 'react'
import { IconPicker } from '@locaop/icon-picker'

export default () => {
  const [value, setValue] = useState("")
  return (
    <IconPicker value={value} onChange={(v) => setValue(v)} />
  )
}
```

You can also use the IconPickerItem component to render the icon. This uses react-icons under the hood.

```react
import * as React from 'react'
import { IconPickerItem } from '@locaop/icon-picker'

export default () => (
  <IconPickerItem icon="FaAdobe" size={24} color="#000" />
  )
```

## All valid configurations/props of the package

IconPicker

| Prop              | Type                | Required | Description                                                    |
| ----------------- | ------------------- | -------- | -------------------------------------------------------------- |
| value             | string              | true     | The current font awesome icon displayed on the picker.         |
| onChange          | (v: string) => void | true     | A change handler that is executed when a new icon is selected. |
| hideSearch        | boolean             | false    | If true, the search input is not displayed. Default is false.  |
| containerStyles   | StyleType       | false    | Styles for the picker container                                |
| pickerContainerStyles      | StyleType       | false    | Styles for the picker button                                   |               |

IconPickerItem
| Prop | Type | Required | Description |
| ---- | --- | --- | ---
| icon | string | true | The name of the icon to render. Example: "FaAdobe" |
| size | number | false |The size of the icon. Default: 24 |
| color | string | false | The color of the icon. Default: "#3a3a3a" |
| onClick | (v: string) => void | false | An onClick handler for the icon. |

## Contribution Guide

If you are interested in contributing, please submit a PR.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.


This library is a fork of [DATechnologies/react-fa-icon-picker](https://github.com/DATechnologies/react-fa-icon-picker).