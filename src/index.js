import Model from './model.js';

window.onload = function() {
  // fill me with relevant code
  const btn = document.getElementById('submit');

  btn.addEventListener('click', () => {
    const form = document.getElementById('form');
    const container = document.getElementById('contanier')

    
  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
   
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
    
  }
});









};
