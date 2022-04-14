const popup = '.popup';
const page = document.querySelector('.page');
const upButton = document.querySelector('.up-button');

document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 700) {
    upButton.classList.add('up-button_visibility');
  } else {
    upButton.classList.remove('up-button_visibility');
  }
});

upButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});


$(document).ready(function(){
  $("#nav-link-home").click(function () {
    $.cookie("#popup__container", "", { expires:0});
    $("#popup").hide();
  });
   
  if ( $.cookie("#popup__container") == null ) {
    setTimeout(function(){
      $("#popup").show();
    }, 500)
  } else { 
    $("#popup").hide();
  }
});





