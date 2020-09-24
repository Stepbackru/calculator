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
        text: 'AC'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: 'k'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: 'k'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '÷'
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
        text: '7'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '8'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '9'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: 'x'
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
        text: '4'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '5'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '6'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '-'
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
        text: '1'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '2'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '3'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '+'
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
        text: '0'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '.'
      },
      {
        el: 'button',
        classNames: 'buttons__item',
        text: '='
      }
    ],
    parent: 'buttons'
  }
];

export default template;
