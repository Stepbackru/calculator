const template = [
  {
    el: 'div',
    classNames: 'wrapper',
    parent: 'body'
  },
  {
    el: 'div',
    classNames: 'display',
    parent: 'wrapper'
  },
  {
    el: 'input',
    classNames: 'display__input',
    parent: 'display',
    dataAttr: [['type', 'text'], ['value', '0'], ['disabled', '']]
  },
  {
    el: 'div',
    classNames: 'buttons',
    parent: 'wrapper'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: [
      {
        el: 'button',
        classNames: 'buttons__item',
        text: 'test'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: 'test2'
      }
    ],
    parent: 'buttons'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: null,
    parent: 'buttons'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: null,
    parent: 'buttons'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: null,
    parent: 'buttons'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: null,
    parent: 'buttons'
  },
];

export default template;
