import creator from './elemcreator.js';
import template from '../data/template.js'

const init = () => {
  initTemplate();
}

const initTemplate = () => {
  template.forEach(el => {
    creator(el.el, el.className, el.child, el.parent);
  })
}

export default init;
