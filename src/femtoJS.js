(() => {
	let argToElements = function(src) {
		let elems = []

		if (typeof src == 'string') {
			elems = [...document.querySelectorAll(src)]
		} else if (src instanceof HTMLElement) {
			elems.push(src)
		} else if (Array.isArray(src)) {
			src.forEach(i => elems.push(...argToElements(i)))
		}

		return elems
	}

	window.$ = function(src) {
		let sel = argToElements(src)

		return {
			on:    function(type, fn) { sel.forEach(i => i.addEventListener(type, fn, false));    return this },
			css:          function(v) { sel.forEach(i => i.style.cssText += v);                   return this },
			html:         function(v) { sel.forEach(i => i.innerHTML = v);                        return this },
			insertBefore: function(v) { sel.forEach(i => i.insertAdjacentHTML('beforeBegin', v)); return this },
			insertAfter:  function(v) { sel.forEach(i => i.insertAdjacentHTML('afterEnd', v));    return this },
			insertFirst:  function(v) { sel.forEach(i => i.insertAdjacentHTML('afterBegin', v));  return this },
			insertLast:   function(v) { sel.forEach(i => i.insertAdjacentHTML('beforeEnd', v));   return this },
			text:         function(v) { sel.forEach(i => i.innerText = v);                        return this },
			addClass:     function(v) { sel.forEach(i => i.classList.add(v));                     return this },
			toggleClass:  function(v) { sel.forEach(i => i.classList.toggle(v));                  return this },
			removeClass:  function(v) { sel.forEach(i => i.classList.remove(v));                  return this },
			empty:         function() { sel.forEach(i => i.innerHTML = '');                       return this },
			attr:      function(a, v) { sel.forEach(i => i.setAttribute(a, v));                   return this },
			removeAttr:   function(v) { sel.forEach(i => i.removeAttribute(v));                   return this },
			parent:        function() { sel.forEach((v, i) => { sel[i] = v.parentNode });         return this },

			getAttr: function(v) { return sel[0].getAttribute(v) },
			offset:  function(v) { return sel[0].getBoundingClientRect() },
			sel:      function() { return sel }
		}
	}
})()
