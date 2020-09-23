import creator from './elemcreator.js';
import template from '../data/template.js'

const init = () => {
  initTemplate();
}

const initTemplate = () => {
  template.forEach(el => {
    // if (!el.dataAttr) {
    //   creator(el.el, el.className, el.child, el.parent);
    //   // creator(el.el, el.className, el.child, el.parent);
    // }
    // if (el.dataAttr) {
    //   creator(el.el, el.className, el.child, el.parent, ...el.dataAttr);
    // }
    creator(el);
  })
}

export default init;
