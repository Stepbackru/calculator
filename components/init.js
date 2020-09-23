import creator from './elemcreator.js';
import template from '../data/template.js'

const init = () => {
  initTemplate();
}

const initTemplate = () => {
  template.forEach(el => creator(el));
}

export default init;
