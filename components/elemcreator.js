// {String} el
// {String} classNames
// {HTMLElement} child
// {HTMLElement} parent
// {...array} dataAttr

const creator = (el, classNames, child, parent, ...dataAttr) => {
  let element = null;

  try {
    element = document.createElement(el);
  } catch {
    throw new Error('Unable to create HTMLElement!');
  }

  if (classNames) {
    element.classList.add(...classNames.split(' '));
  }

  if (child && Array.isArray(child)) {
    child.forEach((el) => el && element.appendChild(el));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }

      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    })
  }
  return element;
}

export default creator;
