window.onload=function(){
var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* chiusura menu a tendina ↑
--------------------------------
pulsante darkmode ↓
*/

const checkbox = document.getElementById('checkbox');
console.log(checkbox);
checkbox.addEventListener('change', () => {
  //qui va inserita la funzione per cambiare il tema//
  document.body.classList.toggle('dark');
});

/* pulsante darkmode ↑
--------------------------------
*/

 /* solo follia */

 $('#click_me').click(function(){
  $('.item').css({
    'visibility':'visible'
  });
});
  
  $('#click_meone').click(function(){
  $('.item').css({
    'visibility':'hidden'
  });
});
  
}