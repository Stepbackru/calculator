const logic = () => {
  const output = document.querySelector('.display__input');
  let valueMemory = null;
  let value2 = null;
  let operationMemory = '';

  document.querySelector('.wrapper').addEventListener('click', (e) => {
    const item = e.target;
    
    if (item.hasAttribute('data-number')) {
      if (output.value.length < 13) {
        if (output.value === '0') {
          output.value = item.getAttribute('data-number');
        } else {
          output.value += item.getAttribute('data-number');
        }
      }
    }

    if (item.hasAttribute('data-operation')) {
      valueMemory = Number(output.value);
      operationMemory = item.getAttribute('data-operation');
    }

    if (item.hasAttribute('data-action')) {
      if (item.getAttribute('data-action') === 'clear') {
        valueMemory = null;
        output.value = '';
        operationMemory = '';
      }
      if (item.getAttribute('data-action') === 'answer') {
        if (valueMemory !== null) {
          value2 = Number(output.value);
          if (operationMemory === '+') {
            output.value = valueMemory + value2;
          }
          if (operationMemory === '-') {
            output.value = valueMemory - value2;
          }
          if (operationMemory === '/') {
            output.value = (valueMemory / value2);
          }
          if (operationMemory === '*') {
            output.value = valueMemory * value2;
          }
          
        }
      }
    }
  });
}

export default logic;
