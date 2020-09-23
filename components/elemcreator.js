// {String} el
// {String} classNames
// {String} text
// {HTMLElement} child
// {HTMLElement} parent
// {...array} dataAttr

const creator = (args) => {
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

  // if (args.child && Array.isArray(child)) {
  //   args.child.forEach((el) => el && element.appendChild(args.el));
  // } else if (args.child && typeof args.child === 'object') {
  //   element.appendChild(args.child);
  // } else if (args.child && typeof args.child === 'string') {
  //   element.innerHTML = args.child;
  // }

  if (args.child !== null && args.child !== undefined) {
    args.child.forEach(el => {
      kid = document.createElement(el.el);

      if (el.classNames) {
        kid.classList.add(...el.classNames.split(' '));
      }

      if (el.text !== undefined) {
        kid.innerText = `${el.text}`;
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

export default creator;
