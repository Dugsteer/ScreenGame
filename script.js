const board = document.getElementById("board");
const die = document.querySelector(".dice");
const roll = document.getElementById("roll");
const imgdiv = document.getElementById('imgdiv');
const rolly = document.getElementById('rolly');
const me = document.getElementById('me');

function goforit(){
  imgdiv.innerHTML = ` <img src="img/${rolly.value}" alt="">`;
  rolly.style.display = "none";
  me.style.display = "none";

}

function flash(){
  die.classList.add('flash');
}

function flashoff(){
  die.classList.remove('flash');
}



//rollDice
function rollDice(){
    // get a number between 0 and 5
    let result= Math.floor(Math.random() * 6);
    flash();
    die.textContent="";
    function setText(){
      die.textContent = result + 1;
    }
    //set the dice text on the DOM to 1 to 6;
    setTimeout(flashoff, 100);
    setTimeout(setText, 200);
};

roll.addEventListener('click', rollDice);


// Move pieces
dragElement(document.getElementById("piece1"));
dragElement(document.getElementById("piece2"));
dragElement(document.getElementById("piece3"));
dragElement(document.getElementById("piece4"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


