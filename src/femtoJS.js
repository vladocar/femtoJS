
var $ = (selector) => {s = document.querySelectorAll(selector); return this}

var on = (type, fn) => {for (let i of s) i.addEventListener( type, fn, false); return this}

var css = (v) => {for (let i of s) i.style.cssText = i.style.cssText + v; return this}

var html = (v) => {for (let i of s) i.innerHTML = v; return this}

var insertBefore = (v) => {for (let i of s) i.insertAdjacentHTML("beforeBegin",v); return this}

var insertAfter = (v) => {for (let i of s) i.insertAdjacentHTML("afterEnd",v); return this}

var insertFirst = (v) => {for (let i of s) i.insertAdjacentHTML("afterBegin",v); return this}

var insertLast = (v) => {for (let i of s) i.insertAdjacentHTML("beforeEnd",v); return this}

var text = (v) => {for (let i of s) i.innerText = v; return this}

var addClass = (v) => {for (let i of s)  i.classList.add(v); return this}

var toggleClass = (v) => {for (let i of s)  i.classList.toggle(v); return this}

var removeClass = (v) => {for (let i of s)  i.classList.remove(v); return this}

var empty = (v) => {for (let i of s) i.innerHTML = ""; return this}

var attr = (a,v) => {for (let i of s) i.setAttribute(a, v); return this}

var getAttr = (v) => {s[0].getAttribute(v); return this}

var removeAttr = (v) => {for (let i of s) i.removeAttribute(v); return this}

var parent = (v) => {s = [s[0].parentNode]; return this}

var offset = (v) => {for (let i of s) offset = i.getBoundingClientRect(); return this}
