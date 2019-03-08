window.$ = function(selector) {
	let sel = [...document.querySelectorAll(selector)]
	
	return {
		on:    (type, fn) => { for (let i of sel) i.addEventListener(type, fn, false);    return this },
		css:          (v) => { for (let i of sel) i.style.cssText += v;                   return this },
		html:         (v) => { for (let i of sel) i.innerHTML = v;                        return this },
		insertBefore: (v) => { for (let i of sel) i.insertAdjacentHTML('beforeBegin', v); return this },
		insertAfter:  (v) => { for (let i of sel) i.insertAdjacentHTML('afterEnd', v);    return this },
		insertFirst:  (v) => { for (let i of sel) i.insertAdjacentHTML('afterBegin', v);  return this },
		insertLast:   (v) => { for (let i of sel) i.insertAdjacentHTML('beforeEnd', v);   return this },
		text:         (v) => { for (let i of sel) i.innerText = v;                        return this },
		addClass:     (v) => { for (let i of sel) i.classList.add(v);                     return this },
		toggleClass:  (v) => { for (let i of sel) i.classList.toggle(v);                  return this },
		removeClass:  (v) => { for (let i of sel) i.classList.remove(v);                  return this },
		empty:        (v) => { for (let i of sel) i.innerHTML = '';                       return this },
		attr:      (a, v) => { for (let i of sel) i.setAttribute(a, v);                   return this },
		getAttr:      (v) => { sel[0].getAttribute(v);                                    return this },
		removeAttr:   (v) => { for (let i of sel) i.removeAttribute(v);                   return this },
		parent:       (v) => { sel.forEach((v, i) => { sel[i] = v.parentNode });          return this },
		offset:       (v) => sel[0].getBoundingClientRect(),
		sel:           () => sel
	}
}
