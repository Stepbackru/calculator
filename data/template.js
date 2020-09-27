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
        classNames: 'buttons__item buttons__item-grey buttons__item-ac',
        text: 'AC',
        dataAttr: [['action', 'clear']]
      },
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-grey operation',
        text: '√',
        dataAttr: [['operation', 'sqrt']]
      },
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-grey buttons__item-x operation',
        text: 'x',
        dataAttr: [['operation', 'pow']]
      },
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-orange operation',
        text: '÷',
        dataAttr: [['operation', '/']]
      }
    ],
    parent: 'buttons'
  },
  {
    el: 'sup',
    classNames: '',
    parent: 'buttons__item-x',
    text: 'y'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: [
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '7',
        dataAttr: [['number', '7']]
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '8',
        dataAttr: [['number', '8']]
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '9',
        dataAttr: [['number', '9']]
      },
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-orange operation',
        text: 'x',
        dataAttr: [['operation', '*']]
      }
    ],
    parent: 'buttons'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: [
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '4',
        dataAttr: [['number', '4']]
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '5',
        dataAttr: [['number', '5']]
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '6',
        dataAttr: [['number', '6']]
      },
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-orange operation',
        text: '-',
        dataAttr: [['operation', '-']]
      }
    ],
    parent: 'buttons'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: [
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '1',
        dataAttr: [['number', '1']]
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '2',
        dataAttr: [['number', '2']]
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '3',
        dataAttr: [['number', '3']]
      },
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-orange operation',
        text: '+',
        dataAttr: [['operation', '+']]
      }
    ],
    parent: 'buttons'
  },
  {
    el: 'div',
    classNames: 'buttons__row',
    child: [
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-zero',
        text: '0',
        dataAttr: [['number', '0']]
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '.',
        dataAttr: [['number', '.']]
      },
      {
        el: 'button',
        classNames: 'buttons__item buttons__item-orange',
        text: '=',
        dataAttr: [['action', 'answer']]
      }
    ],
    parent: 'buttons'
  }
];

export default template;
