import Model from './model.js';

window.onload = function() {
  // fill me with relevant code
  const btn = document.getElementById('submit');
  const formBtn = document.getElementById('post');
  const form = document.getElementById('form');
  const container = document.getElementById('top');

  form.style.display = 'none';
  container.style.display = 'block';

  btn.addEventListener('click', () => {
    
    if (form.style.display === 'none') {
      // 👇️ this SHOWS the form
      form.style.display = 'block';
      container.style.display = 'none';
    
    } else {
      // 👇️ this HIDES the form
      form.style.display = 'none';
      container.style.display = 'block';
      
    }
});

  formBtn.addEventListener('click', () => {
    if (form.checkValidity() === false) {
      window.alert("Please fill out all required fields. Please, dummy. Yea you.");
      
    }
  })









};
