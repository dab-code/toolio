# Toolio - A11Y accessible and lightweight tooltips
**Title**
Toolio was created as a side-project with the goal to create easy-to-use and accessible tooltips, th. 

It should be noted that Toolio should only be used to creat informative tooltips and not contain anything other than concise supplemental information, as this makes their use a lot less accessible. It is, of course, up to you how you use it! 🙏 


**

## Installation
1. Package Manager
```
$ npm i -S @dab-code/toolio
```

2. CDN
```
<script src="https://unpkg.com/@dab-code/toolio@[version]/dist/cjs/index.js"></script>
```

**

## Usage
### Module bundlers
You can import the `Toolio` constructor and initialize a new instance and you're good to go! 🤙

```
import { Toolio } from '@dab-code/toolio'

new Toolio()
```

### CJS
Require that bad boy, initialize a new instance and and throw in a couple HTML elements with some toolio attributes ⚾️
```
const toolio = require('Toolio')

toolio.Toolio()
```

### CDN
```
<script src="https://unpkg.com/@dab-code/toolio@[version]/dist/cjs/index.js"></script>

<script>
    toolio.Toolio()
</script>
```

### HTML
To actually display anything, you need to sprinkle in a bit of HTML in your templates. Toolio finds all the elements with the `toolio` attribute and takes its value and creates a tooltip.
It's possible to change the tooltips placement by using the `toolio-placement="top|right|bottom|left"` attribute and the same goes for the tooltips `max-width`, simply insert `toolio-max-width="250"`. 🧑‍💻
```
<p>
    Aristotle was a Greek <span toolio="A very smart person">philosopher</span> and <span toolio="An even smarter person!">polymath</span>
</p>
```

### Styling
Remember to import Toolios styling. This can be done either by importing it (if you're using a module bundler) or with a simply CDN link thrown into yout HTML template.
1. Module bundlers
``` 
@import "@dab-code/toolio/dist/index.css";
``` 

2. CDN
```
<link href="https://unpkg.com/@dab-code/toolio@[version]/dist/toolio.css" rel="stylesheet">
```

### Customizing the tooltips
Out of the box Toolio uses css variables, which you can easily overwrite by creating a `[toolio]` selector in your preferred styling language. Go ahead and go nuts! 🥜

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
- WCAG 2.1: dismissable, hoverable, and persistent
- Pure JS tooltip ccreation on a html element.
	- `Toolio.createTipOnElement(elm, options)`
	- This way we can customize each tooltip by passing in the options object. 🎨
- More placement options.
	- `[top|top-left|top-right|right-top|right|right-bottom|bottom-right|bottom|bottom-left|left-bottom|left|left-top]`
	
***

## License
MIT
