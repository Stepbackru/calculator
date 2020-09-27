// {String} el
// {String} classNames
// {String} text
// {HTMLElement} child
// {HTMLElement} parent
// {...array} dataAttr

const render = (args) => {
  let element = null;
  let kid = null;

  try {
    element = document.createElement(args.el);
  } catch {
    throw new Error('Unable to create HTMLElement!');
  }

  if (args.classNames) {
    element.classList.add(...args.classNames.split(' '));
  }
  
  if (args.text !== undefined) {
    element.innerText = `${args.text}`;
  }

  if (args.child !== null && args.child !== undefined) {
    args.child.forEach(el => {
      kid = document.createElement(el.el);

      if (el.classNames) {
        kid.classList.add(...el.classNames.split(' '));
      }

      if (el.text !== undefined) {
        kid.innerText = `${el.text}`;
      }

      if (el.dataAttr !== undefined) {
        el.dataAttr.forEach(([attrName, attrValue]) => {
          if (attrValue === '') {
            kid.setAttribute(attrName, '');
          }
    
          if (attrName.match(/value|id|placeholder|type/)) {
            kid.setAttribute(attrName, attrValue);
          } else if (attrValue !== '') {
            kid.dataset[attrName] = attrValue;
          }
        })
      }

      element.appendChild(kid);
    })
  }

  if (args.parent) {
    if (args.parent === 'body') {
      document.body.appendChild(element);
    } else {
      document.querySelector(`.${args.parent}`).appendChild(element);
    }
  }

  if (args.dataAttr !== undefined) {
    args.dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }

      if (attrName.match(/value|id|placeholder|type/)) {
        element.setAttribute(attrName, attrValue);
      } else if (attrValue !== '') {
        element.dataset[attrName] = attrValue;
      }
    })
  }
  return element;
}

export default render;
