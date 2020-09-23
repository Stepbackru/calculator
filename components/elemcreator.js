// {String} el
// {String} classNames
// {HTMLElement} child
// {HTMLElement} parent
// {...array} dataAttr

const creator = (args) => {
  // const { el, classNames, child, parent, dataAttr } = args;
  let element = null;

  try {
    element = document.createElement(args.el);
  } catch {
    throw new Error('Unable to create HTMLElement!');
  }

  if (args.classNames) {
    element.classList.add(...args.classNames.split(' '));
  }

  if (args.child && Array.isArray(child)) {
    args.child.forEach((el) => el && element.appendChild(args.el));
  } else if (args.child && typeof args.child === 'object') {
    element.appendChild(args.child);
  } else if (args.child && typeof args.child === 'string') {
    element.innerHTML = args.child;
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
// const creator = (args) => {
//   const { el, classNames, child, parent, dataAttr } = args;
//   let element = null;

//   try {
//     element = document.createElement(el);
//   } catch {
//     throw new Error('Unable to create HTMLElement!');
//   }

//   if (classNames) {
//     element.classList.add(...classNames.split(' '));
//   }

//   if (child && Array.isArray(child)) {
//     child.forEach((el) => el && element.appendChild(el));
//   } else if (child && typeof child === 'object') {
//     element.appendChild(child);
//   } else if (child && typeof child === 'string') {
//     element.innerHTML = child;
//   }

//   if (parent) {
//     if (parent === 'body') {
//       document.body.appendChild(element);
//     } else {
//       document.querySelector(`.${parent}`).appendChild(element);
//     }
//   }

//   if (dataAttr.length) {
//     dataAttr.forEach(([attrName, attrValue]) => {
//       if (attrValue === '') {
//         element.setAttribute(attrName, '');
//       }

//       if (attrName.match(/value|id|placeholder|type/)) {
//         element.setAttribute(attrName, attrValue);
//       } else {
//         element.dataset[attrName] = attrValue;
//       }
//     })
//   }
//   return element;
// }
// const creator = (el, classNames, child, parent, ...dataAttr) => {
//   let element = null;

//   try {
//     element = document.createElement(el);
//   } catch {
//     throw new Error('Unable to create HTMLElement!');
//   }

//   if (classNames) {
//     element.classList.add(...classNames.split(' '));
//   }

//   if (child && Array.isArray(child)) {
//     child.forEach((el) => el && element.appendChild(el));
//   } else if (child && typeof child === 'object') {
//     element.appendChild(child);
//   } else if (child && typeof child === 'string') {
//     element.innerHTML = child;
//   }

//   if (parent) {
//     if (parent === 'body') {
//       document.body.appendChild(element);
//     } else {
//       document.querySelector(`.${parent}`).appendChild(element);
//     }
//   }

//   if (dataAttr.length) {
//     dataAttr.forEach(([attrName, attrValue]) => {
//       if (attrValue === '') {
//         element.setAttribute(attrName, '');
//       }

//       if (attrName.match(/value|id|placeholder|type/)) {
//         element.setAttribute(attrName, attrValue);
//       } else {
//         element.dataset[attrName] = attrValue;
//       }
//     })
//   }
//   return element;
// }

export default creator;
