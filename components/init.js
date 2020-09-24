import render from './render.js';
import template from '../data/template.js'

const init = () => {
  initTemplate();
}

const initTemplate = () => {
  template.forEach(el => render(el));
}

export default init;
