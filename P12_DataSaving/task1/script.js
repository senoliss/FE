document.getElementById('add-to-session-store').addEventListener('click', () => {
    sessionStorage.setItem("test", 11);
});

document.getElementById('add-to-local-store').addEventListener('click', () => {
    sessionStorage.setItem("test local storage", 'Sveiki visi.');
});



const form = document.getElementById('login-form');
const textInput = document.getElementById('textInput');
const displayText = document.getElementById('leleTextas');

textInput.addEventListener('keyup', function() {
  displayText.textContent = textInput.value;
});


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const typedText = textInput.value;
  localStorage.setItem('savedText', typedText);

  textInput.value = '';
  displayText.textContent = `Issaugota i local storage: ${typedText}`;
});