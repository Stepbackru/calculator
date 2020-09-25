const logic = () => {
  const output = document.querySelector('.display__input');
  let valueMemory = null;
  let newValue = false;
  let value2 = null;
  let operationMemory = '';
  let minusFlag = false;


  document.querySelector('.wrapper').addEventListener('click', (e) => {
    const item = e.target;
    
    if (item.hasAttribute('data-number')) {
      if (output.value.length < 13) {
        if (newValue) {
          output.value = item.getAttribute('data-number');
          newValue = false;
          // if (minusFlag) {
          //   output.value += item.getAttribute('data-number');
          //   minusFlag = false;
          // }
        } else {
          if (output.value === '0') {
            output.value = item.getAttribute('data-number');
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

      output.value = decimalMemory;
    }

    if (item.hasAttribute('data-operation')) {
      if (item.getAttribute('data-operation') === '-') {
        if (output.value === '0') {
          output.value = '-';
          minusFlag = true;
        }
      }
      valueMemory = Number(output.value);
      if (output.value !== '-') {
        newValue = true;
      }
      operationMemory = item.getAttribute('data-operation');
    }

    if (item.hasAttribute('data-action')) {
      if (item.getAttribute('data-action') === 'clear') {
        valueMemory = null;
        newValue = false;
        operationMemory = '';
        output.value = '0';
      }
      if (item.getAttribute('data-action') === 'answer') {
        if (valueMemory !== null) {
          value2 = Number(output.value);
          if (operationMemory === '+') {
            output.value = parseFloat(valueMemory + value2);
          }
          if (operationMemory === '-') {
            output.value = parseFloat(valueMemory - value2);
          }
          if (operationMemory === '/') {
            output.value = parseFloat(valueMemory / value2);
          }
          if (operationMemory === '*') {
            output.value = parseFloat(valueMemory * value2);
          }
          
        }
      }
    }
  });
}

export default logic;
