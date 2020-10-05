let ValueMemory = null;
let NewValue = false;
let OperationMemory = ''
let CleanMemory = false;

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
    } else {
      if (output.value === '0') {
        output.value = item.getAttribute('data-number');

        buttonAc.setAttribute('data-action', 'partClear');
        buttonAc.innerText = 'C';
        CleanMemory = false;
      } else {
        output.value += item.getAttribute('data-number');
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
      ValueMemory = Math.round((Number(ValueMemory) + Number(value2)) * 100) / 100
      // Math.round((ValueMemory += Number(value2)) * 100) / 100;
    } else if (OperationMemory === '-') {
      ValueMemory = Math.round((Number(ValueMemory) - Number(value2)) * 100) / 100
      // Math.round((ValueMemory -= Number(value2)) * 100) / 100;
    } else if (OperationMemory === '*') {
      ValueMemory = Math.round((Number(ValueMemory) * Number(value2)) * 100) / 100
      // Math.round((ValueMemory *= Number(value2)) * 100) / 100;
    } else if (OperationMemory === '/') {
      ValueMemory = Math.round((Number(ValueMemory) / Number(value2)) * 100) / 100
      // Math.round((ValueMemory /= Number(value2)) * 100) / 100;
    } else {
      ValueMemory = Number(value2);
      // здесь подумать над 0.1 + 0.2 где-то надо добавить math.round
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

  ValueMemory = null;
  NewValue = true;
  OperationMemory = '';
  output.value = '0';
}

const accurateCalc = (operation, val1, val2, output) => {
  let n = {
          '+': val1 + val2,
          '-': val1 - val2,
          '/': val1 / val2,
          '*': val1 * val2
      }[operation];        

  return output.value = Math.round(n * 100) / 100;
};

export default logic;
