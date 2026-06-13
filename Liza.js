function Liza(selector) {
 let elements;
 if (typeof selector === 'string') {
  elements = document.querySelectorAll(selector);
 } else {
  elements = [selector];
 }



 return {
  length: elements.length,
  click(cb) {
   elements.forEach(i => i.addEventListener('click', cb))
   return this
  },
  text(txt) {
   elements.forEach(i => {
    i.textContent = txt
   })
   return this
  },
  val(v) {
   if (v === undefined) return elements[0] ? elements[0].value.trim() : ''
   elements.forEach(i => i.value = v)
   return this
  },
  append(el) {
   elements.forEach(i => i.appendChild(el))
   return this
  },
  classList(...className) {
   elements.forEach(i => {
    i.classList.add(...className)
   })
   return this
  },
  classToggle(...className) {
   elements.forEach(i => {
    i.classList.toggle(...className);

   })
   return this
  },
  classRemove(...className) {
   elements.forEach(i => {
    i.classList.remove(...className)
   })
   return this
  },
  className(className) {
   elements.forEach(i => {
    i.className = className
   })
  },
  remove() {
   elements.forEach(i => {
    i.remove()
   })
   return this
  },
  parent() {
   if (!elements[0]) return Liza(null);
   return Liza(elements[0].parentElement)
  }
 }
}

const Kiss = {
 post(url, data) {
  return fetch(url, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(data)
  }).then(res => {
   if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
   return res.json()
  })
 },

 get(url) {
  return fetch(url).then(res => {
   if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
   return res.json();
  })
 },

 delete(url) {
  return fetch(url, { method: 'DELETE' }).then(res => {
   if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
   return res.json()
  })
 }
}

function show(data) {
 return JSON.stringify(data, null, 2)
}

function id(idName) {
 return document.querySelector(idName);
}
function selectorClass(className) {
 return document.querySelector(className)
}
function make(el, txt,) {
 let element = document.createElement(el)
 txt ? element.textContent = txt : ''
 return element
}


function text(txt) {
 return txt.target.textContent;
}
