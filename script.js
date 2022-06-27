function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function make_invalid(){
  $('form').addClass('submitted');
}

window.onload=function(){
  document.getElementById('submit_button').addEventListener("click", make_invalid, true);
}