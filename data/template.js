const template = [
  {
    el: 'div',
    className: 'wrapper',
    child: null,
    parent: document.body
  },
  {
    el: 'div',
    className: 'display',
    child: null,
    parent: document.querySelector('.wrapper')
  },
  {
    el: 'input',
    className: 'display__input',
    child: null,
    parent: document.querySelector('.display'),
    attr0: ['type', 'text'], 
    attr1: ['value', '0'], 
    attr2: ['disabled', '']
  }
];

export default template;
