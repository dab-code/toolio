# Toolio
[![npm downloads](https://img.shields.io/npm/dm/@dab-code/toolio)](https://npmjs.org/@dab-code/toolio)
[![size](https://img.shields.io/bundlephobia/minzip/@dab-code/toolio?color=54CA2F&style=popout)](https://npmjs.org/@dab-code/toolio)

Description


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Roadmap](#roadmap)

## Installation
### ESM
```
$ npm install --save @dab-code/toolio
```

### CommonJS
#### Unpkg.com (coming), so stop! Wait a minute and grab yourself a cup of coffee ☕️
```
<script src="./node_modules/@dab-code/toolio/dist/index.js"></script>
```

## Usage

### HTML
```
<p>
    Aristotle was a Greek <span toolio="A very smart person">philosopher</span> and <span toolio="An even smarter person!">polymath</span>
</p>
```
#### Toolio html attributes
```
    toolio-placement="top|right|bottom|left"
    toolio-max-width="250"
```

Toolio comes both as a sweet ES module and as a nifty Commonjs. So use whichever fits your project 👍️ 
### ESM
```
import { Toolio } from '@dab-code/toolio'
...
new Toolio()
```
Easy-peasy 🤙

### CommonJS

```
<script>
    ...
    toolio.Toolio()
    ...
</script>
```
### SCSS
```
@import "@dab-code/toolio/dist/index.css";
```

### CSS
#### Unpkg.com (coming), so don't do this just yet!
```
<link href="./node_modules/@dab-code/toolio/dist/toolio.css" rel="stylesheet">
```  

Toolio uses css variables, so it's pretty easy to change the look and feel of the tooltips. Simply overwrite the default variables by creating your own custom variables. 👩‍💻
```
[toolio] {
    --T_COLOR: white;
    --T_BACKGROUND: #252525;

    --T_BORDERRADIUS: 3px;

    --T_FONTSIZE: .9rem;
    --T_FONTWEIGHT: normal;
    --T_LINEHEIGT: var(--T_FONTSIZE);
    --T_TEXTDECORATION: underline dotted;

    --T_PADDING: .5rem .75rem .4rem;

    --T_EASING-ENTER: .25s ease .125s;
    --T_EASING-LEAVE: .25s ease .25s;
}
```


## Roadmap
- Unpkg.com
- Pure js tooltip creation on an element: 
    - `Toolio.createTipOnElement(elm, options)`
    - This way we can customize each tooltip by passing in the options object. 🎨
## License
`Toolio` is released under the MIT license.