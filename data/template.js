const template = [
  {
    el: 'div',
    classNames: 'wrapper',
    child: null,
    parent: 'body'
  },
  {
    el: 'div',
    classNames: 'display',
    child: null,
    parent: 'wrapper'
  },
  {
    el: 'input',
    classNames: 'display__input',
    child: null,
    parent: 'display',
    dataAttr: [['type', 'text'], ['value', '0'], ['disabled', '']]
  }
];

export default template;
