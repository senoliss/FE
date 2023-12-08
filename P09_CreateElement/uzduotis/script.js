const inputElement = document.getElementById('number');
const formElement = document.getElementById('numberForm');

inputElement.addEventListener('blur', () => {
  // gewt vaLue from input
  const errorMessageElement = document.createElement('p');
  errorMessageElement.id = 'errorMessage';
  errorMessageElement.style.padding = '5px';
  const enteredValue = inputElement.value;

// add focus event to delete alst message when input box is focused
inputElement.addEventListener('focus', () => {
    // delete prvious msg if it exists on focus event
    const previousErrorMessage = document.getElementById('errorMessage');
    if (previousErrorMessage) {
      previousErrorMessage.remove();
    }
  });

  if (isNaN(enteredValue) || enteredValue < 0 || enteredValue > 99 || enteredValue === undefined) {
    errorMessageElement.style.backgroundColor = 'Salmon';
    errorMessageElement.style.color = 'DarkRed';
    errorMessageElement.innerHTML = `Tai yra <b>NE</b> skaicius, arba ne tarp 0 ir 99: <u>${enteredValue}</u>`;
  } else {
    errorMessageElement.style.backgroundColor = 'YellowGreen';
    errorMessageElement.style.color = 'DarkOliveGreen';
    errorMessageElement.innerHTML = `Tai yra skaicius: 0 < ${enteredValue} < 99`;
  }

  formElement.append(errorMessageElement);
});
