# femtoJS

[![License MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/femtojs@1.0.0/src/femtoJS.min.js?compression=gzip)](https://unpkg.com/femtojs@1.0.0/src/femtoJS.min.js)
[![npm](https://img.shields.io/npm/v/femtojs.svg)](https://www.npmjs.com/package/femtojs) [![Join the chat at https://gitter.im/femtoJS/community](https://badges.gitter.im/femtoJS/community.svg)](https://gitter.im/femtoJS/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Really small JS (ES6) library for DOM manipulation.

<p align="center"><img src="logo/femtoJS-logo.png"/></p>

femtoJS is less then 20 lines of code (0.4 Kb gziped) JavaScript library for basic DOM manipulation. It has jQuery syntax and supports chaining. It is also modular and super easy to customize, just delete the methods you don't use. 

Syntax demos:

```javascript

$("div").css("background-color:green;").html("Hello World").addClass("new");
```
Here is the core logic of this library:

```javascript
/* Selector */
var $ = (selector) => {s = document.querySelectorAll(selector); return this}

/* Event handler */
var on = (type, fn) => {for (let i of s) i.addEventListener( type, fn, false); return this}

/* Methods */
var css = (v) => {for (let i of s) i.style.cssText = i.style.cssText + v; return this}

var html = (v) => {for (let i of s) i.innerHTML = v; return this}

```
With 4 lines of code you have: selector engine ($), event handler (on) and the css, html method.

```javascript

$("#a").on("click", function(){

  $("#someDiv").css("color:red").html("Hello femtoJS");

})

```

It works in all the browsers that support <a href="https://caniuse.com/#search=es6">ES6</a>. If you need to support older browsers take a look into my previous project <a href="https://github.com/vladocar/nanoJS">nanoJS</a>.


You can use direct download or:

```sh
npm i femtojs
```

```sh
yarn add femtojs
```

```html
<script src="https://unpkg.com/femtojs@1.0.0/src/femtoJS.min.js"></script>

OR

<script src="https://cdn.jsdelivr.net/npm/femtojs@1.0.0/src/femtoJS.min.js"></script>
```

### Utils:

addClass    
attr  
css    
empty    
getAttr  
html  
insertAfter, insertBefore, insertFirst insertLast  
offset  
on  
parent  
removeAttr  
removeClass    
text  
toggleClass  

[You can find it here some basic examples.](docs.md)

[Simple demo](https://vladocar.github.io/femtoJS/off-on.html)

[Project femtoJS](https://vladocar.github.io/femtoJS/)

<h3>License</h3>

This project is licensed under the MIT License
