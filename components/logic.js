const logic = () => {
  const output = document.querySelector('.display__input');
  const operations = [...document.querySelectorAll('.operation')];
  const buttonAc = document.querySelector('.buttons__item-ac');
  let valueMemory = null;
  let newValue = false;
  let value2 = null;
  let operationMemory = '';
  let cleanMemory = false;


  document.querySelector('.wrapper').addEventListener('click', (e) => {
    const item = e.target;
    
    if (item.hasAttribute('data-number')) {
      if (output.value.length < 13) {
        if (newValue) {
          output.value = item.getAttribute('data-number');
          newValue = false;

          operations.forEach(el => {
            el.classList.remove('buttons__item_active-orange');
            el.classList.remove('buttons__item_active-grey');
          });
        } else {
          if (output.value === '0') {
            output.value = item.getAttribute('data-number');

            buttonAc.setAttribute('data-action', 'partClear');
            buttonAc.innerText = 'C';
            cleanMemory = false;
          } else {
            output.value += item.getAttribute('data-number');
          }
        }
      }
    }

    if (item.getAttribute('data-number') === '.') {
      let decimalMemory = output.value;

      if (decimalMemory === '.') {
        decimalMemory = '0.';
        newValue = false;
      }

      cleanMemory = false;
      output.value = decimalMemory;
    }

    if (item.hasAttribute('data-operation')) {
      if (item.getAttribute('data-operation') === '-') {
        if (output.value === '0') {
          output.value = '-';
        }
      }
      
      operations.forEach(el => {
        el.classList.remove('buttons__item_active-orange');
        el.classList.remove('buttons__item_active-grey');
      });

      const grey = item.classList.contains('buttons__item-grey');
      const orange = item.classList.contains('buttons__item-orange');

      if (grey && item.getAttribute('data-operation') !== 'sqrt') {
        item.classList.add('buttons__item_active-grey');
      } else if (orange) {
        item.classList.add('buttons__item_active-orange');
      }

      valueMemory = Number(output.value);
      if (output.value !== '-') {
        newValue = true;
      }
      operationMemory = item.getAttribute('data-operation');
    }

    if (operationMemory === 'sqrt') {
      output.value = parseFloat( Math.sqrt(valueMemory));
      cleanMemory = false;
    }

    if (item.hasAttribute('data-action')) {
      if (item.getAttribute('data-action') === 'partClear') {
        output.value = '0';
        buttonAc.innerText = 'AC';
        buttonAc.setAttribute('data-action', 'clear');
        cleanMemory = true;
      }

      if (item.getAttribute('data-action') === 'clear') {
        if (!cleanMemory) {
          valueMemory = null;
          newValue = false;
          operationMemory = '';
          output.value = '0';
          operations.forEach(el => {
            el.classList.remove('buttons__item_active-orange');
            el.classList.remove('buttons__item_active-grey');
          });
        }
      }
      
      if (item.getAttribute('data-action') === 'answer') {
        if (valueMemory !== null) {
          value2 = Number(output.value);
          cleanMemory = false;
          accurateCalc(operationMemory, valueMemory, value2, output);
          if (operationMemory === 'pow') {
            output.value = Math.pow(valueMemory, value2);
          }
        }
      }
    }
  });
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
