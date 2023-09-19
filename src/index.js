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
    const title = document.getElementById('questionTitle');
    const text = document.getElementById('questionText');
    const tag = document.getElementById('tagText');
    const name = document.getElementById('userName');

    const titleError = document.getElementById('titleError');
    const textError = document.getElementById('textError');
    const tagError = document.getElementById('tagError');
    const nameError = document.getElementById('nameError');

    const text1 = title.value;
    const text2 = text.value;
    const text3 = tag.value;
    const text4 = name.value

    if (text1.length == 0 || text1.length > 100) {
    // Display a message indicating the character count is valid
      titleError.style.display="block";
    }else if(text2.length == 0){
      textError.style.display="block";
    }else if(text3.length == 0){
     tagError.style.display="block";
    }else if(text4.length == 0){
      nameError.style.display="block";
    }
  }
                           
  })









};
