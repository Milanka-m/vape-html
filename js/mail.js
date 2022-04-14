"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    
    let formData = new FormData(form);

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    })
    console.log(`Response: ${response}`);
    if (response.ok) {

      let result = await response.json();
      form.reset();
      
      console.log(result.message);

    } else console.log('Ошибка отпраки');
  }

})