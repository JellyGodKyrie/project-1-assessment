document.addEventListener('DOMContentLoaded', (event) => {
  const counterValueInput = document.getElementById('counter-value');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const displayNumber = document.querySelector('.number h1');
  
  let count = 0;

  counterValueInput.value = 1;

  displayNumber.textContent = count;

  incrementButton.addEventListener('click', () => {
    const addValue = parseInt(counterValueInput.value, 10);
    count += isNaN(addValue) ? 0 : addValue;
    displayNumber.textContent = count;
  });

  decrementButton.addEventListener('click', () => {
    const subtractValue = parseInt(counterValueInput.value, 10);
    count -= isNaN(subtractValue) ? 0 : subtractValue;
    displayNumber.textContent = count;
  });
});
