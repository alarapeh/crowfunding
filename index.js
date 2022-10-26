function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function change(){
  var txt = document.querySelector(".txt")
  txt = document.querySelector(".txt").innerHTML=" Bookmarked"
}

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

function closeModal(){
  var cyan = document.querySelector(".cyan")
  modal.style.display = "none"
}
function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}
const radio = document.querySelectorAll('.bcon');
const selection1 = document.querySelector('.one');
const selection2 = document.querySelector('.two');
const selection3 = document.querySelector('.three')
function radioButton1(){
  selection1.style.border = '1px solid hsl(176, 50%, 47%) '
  selection2.style.border = 'none'
  selection3.style.border = 'none'
}
function radioButton2(){
  selection2.style.border = '1px solid hsl(176, 50%, 47%) '
  selection1.style.border = 'none'
  selection3.style.border = 'none'
}
function radioButton3(){
  selection3.style.border = '1px solid hsl(176, 50%, 47%) '
  selection2.style.border = 'none'
  selection1.style.border = 'none'
}


//top modal
const topModal = document.querySelector(".mobile-other-links")
const hamburgerButton = document.querySelector('.ham');
const hamo = document.querySelector(".hamo")
const timess = document.querySelector(".times")
function showModal(){
  topModal.style.display = 'block'
  hamburgerButton.style.display ='none'
  timess.style.display = ' block'
}
function closeeModal(){
  topModal.style.display = 'none'
  timess.style.display = 'none'
  hamburgerButton.style.display = 'block'
}
hamburgerButton.addEventListener('click', showModal)
timess.addEventListener('click', closeeModal)