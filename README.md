
[![npm downloads](https://img.shields.io/npm/dm/@dab-code/toolio)](https://npmjs.org/@dab-code/toolio)
[![size](https://img.shields.io/bundlephobia/minzip/@dab-code/toolio?color=54CA2F&style=popout)](https://npmjs.org/@dab-code/toolio)

# Toolio - A11Y accessible and lightweight tooltips
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [License](#license)

***

## Installation
### ESM & CJS
```
$ npm install --save @dab-code/toolio
```

### CDN
```
<script src="https://unpkg.com/@dab-code/toolio@[version]/dist/cjs/index.js"></script>
```

***
## Usage

Toolio comes both as a sweet ES module, a nifty Commonjs or a script import. So use whichever fits your project best 👍️ 
### ESM
import `Toolio` and initialize a new instance and the magic will happen on it's own - after you've sprinkled some [HTML](#HTML) dust in your templates ofc 🧙‍♀️
```
import { Toolio } from '@dab-code/toolio'
...
new Toolio()
```
Easy-peasy 🤙


### CJS
Require that bad boy, initialize a new instance and and throw in a couple [HTML](#HTML) elements with some toolio attributes ⚾️
```
const toolio = require('Toolio')
...
toolio.Toolio()
...
```


### CDN
Same as above, just easier!
```
<script>
    ...
    toolio.Toolio()
    ...
</script>
```


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


### SCSS/CSS
```
@import "@dab-code/toolio/dist/index.css";
```

#### CDN 
```
<link href="https://unpkg.com/@dab-code/toolio@[version]/dist/toolio.css" rel="stylesheet">
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

***

## Roadmap
- Pure js tooltip creation on an element: 
    - `Toolio.createTipOnElement(elm, options)`
    - This way we can customize each tooltip by passing in the options object. 🎨

***

## License
`Toolio` is released under the MIT license.