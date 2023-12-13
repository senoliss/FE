window.onload = () =>
{
    console.log("window onload event");

    document.getElementById('add-to-session-store')
      .addEventListener('click', () => {
      sessionStorage.setItem("test", 11);
    });

    document.getElementById('add-to-local-store')
      .addEventListener('click', () => {
      sessionStorage.setItem("test local storage", 'Sveiki visi.');
    });

}
// sessionStorage keeps key and value pairs info on session, if new tab or browser is opened no info
// localStorage on other hand keeps info on kinda localDb debends from browser and it tracks your info like shopping cart.
const sessionStorageItems = sessionStorage.getItem('agreed');
const localStorageItems = localStorage.getItem('agreed');

if(sessionStorageItems === null)
{
  // not yet agreed on session, display a popup message
  if (confirm("Do you agrre to terms and conditions?")) {
    sessionStorage.setItem('consent', 'agreed')
  } else {
    localStorage.setItem('consent', 'notAgreed')
  }
}

// if(localStorageItems === null)
// {

// }


