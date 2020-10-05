let ValueMemory = null;
let NewValue = false;
let OperationMemory = ''
let CleanMemory = false;
let NegativeNumber = false;

const logic = () => {
  document.querySelector('.wrapper').addEventListener('click', (e) => {
    const item = e.target;

    // числа
    if(item.hasAttribute('data-number')) {
      numberInput(item);
    }

    // оперции
    if (item.hasAttribute('data-operation')) {
      operation(item);
    }

    // точка
    if (item.getAttribute('data-decimal') === '.') {
      decimal();
    }

    // очистка
    if (item.hasAttribute('data-action')) {
      if (item.getAttribute('data-action') === 'partClear') {
        partClear();
      }
      if (item.getAttribute('data-action') === 'clear') {
        fullClear();
      }
      if (item.getAttribute('data-action') === '+/-') {
        negative();
      }
    }

  });
}

const numberInput = (item) => {
  const output = document.querySelector('.display__input');
  const operations = [...document.querySelectorAll('.operation')];
  const buttonAc = document.querySelector('.buttons__item-ac');

  if (output.value.length < 13) {
    if (NewValue) {
      output.value = item.getAttribute('data-number');
      NewValue = false;
      operations.forEach(el => {
        el.classList.remove('buttons__item_active-orange');
        el.classList.remove('buttons__item_active-grey');
      });

      buttonAc.setAttribute('data-action', 'partClear');
      buttonAc.innerText = 'C';

      if (NegativeNumber) {
        output.value = item.getAttribute('data-number') * (-1);
        NegativeNumber = false;
      }
    } else {
      if (output.value === '0') {
        output.value = item.getAttribute('data-number');

        buttonAc.setAttribute('data-action', 'partClear');
        buttonAc.innerText = 'C';
        CleanMemory = false;
      } else {
        if (!NegativeNumber) {
          output.value += item.getAttribute('data-number');
        } else {
          output.value = item.getAttribute('data-number') * (-1);
          NegativeNumber = false;
        }
      }
    }
  }
}

const operation = (item) => {
  const output = document.querySelector('.display__input');
  const operations = [...document.querySelectorAll('.operation')];
  let value2 = output.value;

  operations.forEach(el => {
    el.classList.remove('buttons__item_active-orange');
    el.classList.remove('buttons__item_active-grey');
  });

  const grey = item.classList.contains('buttons__item-grey');
  const orange = item.classList.contains('buttons__item-orange');

  if (grey && item.getAttribute('data-operation') !== 'sqrt') {
    item.classList.add('buttons__item_active-grey');
  } else if (orange && item.getAttribute('data-operation') !== '=') {
    item.classList.add('buttons__item_active-orange');
  }
  if (NewValue && OperationMemory !== '=') {
    output.value = ValueMemory;
  } else {
    NewValue = true;
    if (OperationMemory === '+') {
      ValueMemory = Math.round((Number(ValueMemory) + Number(value2)) * 100) / 100;
    } else if (OperationMemory === '-') {
      ValueMemory = Math.round((Number(ValueMemory) - Number(value2)) * 100) / 100;
    } else if (OperationMemory === '*') {
      ValueMemory = Math.round((Number(ValueMemory) * Number(value2)) * 100) / 100;
    } else if (OperationMemory === '/') {
      ValueMemory = Math.round((Number(ValueMemory) / Number(value2)) * 100) / 100;
    } else if (OperationMemory === 'sqrt' || item.getAttribute('data-operation') === 'sqrt') {
      if (ValueMemory === null) {
        NewValue = false;
        ValueMemory = parseFloat(Math.sqrt(Number(output.value)));
      }
    } else if (OperationMemory === 'pow') {
      ValueMemory = Math.pow(ValueMemory, value2);
    } else {
      ValueMemory = Number(value2);
    }
    output.value = ValueMemory;
    OperationMemory = item.getAttribute('data-operation');
  }
}

const decimal = () => {
  const output = document.querySelector('.display__input');
  let decimalMemory = output.value;

  if (NewValue) {
    decimalMemory = '0.';
    NewValue = false;
  } else {
    if (decimalMemory.indexOf('.') === -1) {
      decimalMemory += '.';
    }
  }

  output.value = decimalMemory;
}

const partClear = () => {
  const output = document.querySelector('.display__input');
  const buttonAc = document.querySelector('.buttons__item-ac');

  output.value = '0';
  NewValue = true;
  buttonAc.innerText = 'AC';
  buttonAc.setAttribute('data-action', 'clear');
  CleanMemory = true;
}

const fullClear = () => {
  const output = document.querySelector('.display__input');
  const operations = [...document.querySelectorAll('.operation')];

  ValueMemory = null;
  NewValue = true;
  OperationMemory = '';
  output.value = '0';
  
  operations.forEach(el => {
    el.classList.remove('buttons__item_active-orange');
    el.classList.remove('buttons__item_active-grey');
  });
}

const negative = () => {
  const output = document.querySelector('.display__input');
  if (output.value !== '0' && !NewValue) {
    output.value = Number(output.value) * (-1);
  } else {
    NegativeNumber = true;
    output.value = '-0';
  }
}

export default logic;
