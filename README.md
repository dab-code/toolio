# Toolio - A11Y accessible and lightweight tooltips
**Toolio** was created as a side-project with the goal to create easy-to-use and accessible tooltips. 

It should be noted that Toolio should only be used to creat informative tooltips and not contain anything other than concise supplemental information, as this makes their use a lot less accessible. 

It is of course up to you how you use it! 🙏 


***

## Installation
- Package Manager
```
$ npm i -S @dab-code/toolio
```

- CDN
```
<script src="https://unpkg.com/@dab-code/toolio@[version]/dist/cjs/index.js"></script>
```

***

## Usage
### Module bundlers
You can import the `Toolio` constructor and initialize a new instance! Now all gyou need to do is sprinkling a couple of toolio attributes into your HTML template! 🦄

```
import { Toolio } from '@dab-code/toolio'

new Toolio()
```


### CJS
Require that bad boy, initialize a new instance and go crazy! 🥳
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
Now wasn't that easy? Now all you need to do is find something cool and smart to attach a tooltip to 🤷


All you have to do is create a `span` element around the word(s) you want your cool tooltip to be assigned to. The add the `toolio` attribute to said `span` and type in your fancy words!


If you'd like to either change tooltips max-width og placement, you can simply use the attributes `toolio-max-width` (defaults to `250`) and `toolio-placement`, which accepts `top|right|bottom|left` (defaults to `top`). 🧑‍💻

```
<p>
    Aristotle was a Greek <span toolio="A very smart person">philosopher</span> and <span toolio="An even smarter person!">polymath</span>
</p>
```


### Styling
Remember to import Toolios styling. This can be done either by importing it (if you're using a module bundler) or simply  with by adding the CDN in your `<head>` section.


1. Module bundlers
``` 
@import "@dab-code/toolio/dist/index.css";
``` 

2. CDN
```
<link href="https://unpkg.com/@dab-code/toolio@[version]/dist/toolio.css" rel="stylesheet">
```


### Customizing the tooltips
As I was looking for the easiest way to get started, I chose to use css variables to style the tooltips. This means it should be quite easy to overrule the default styling. 🎂 

To change the variables, create a new scoped selector name `[toolio]´ and go nuts! 🥜

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
