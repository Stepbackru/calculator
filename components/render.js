// {Object} args

const render = (args) => {
  let element = null;

  // Create Element
  try {
    element = document.createElement(args.el);
  } catch {
    throw new Error('Unable to create HTMLElement!');
  }

  // Add classNames to element
  if (args.classNames) {
    element.classList.add(...args.classNames.split(' '));
  }
  
  if (args.text !== undefined) {
    element.innerText = `${args.text}`;
  }

  // Childs of element
  if (args.child && Array.isArray(args.child)) {
    args.child.forEach(child => element.appendChild(render(child)));
  }

  // Parent of element (for first element)
  if (args.parent) {
    if (args.parent === 'body') {
      document.body.appendChild(element);
    }
  }

  // data-attributes of element
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
