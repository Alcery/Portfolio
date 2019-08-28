"use strict";


// form validation
 





// nav color changer on hover
window.addEventListener("load", colorGenerator);


function colorGenerator() {
   let colorChanger= Math.floor(Math.random() * 16777215).toString(16);
   const navLink = document.getElementsByClassName("nav-link");
   navLink.style.color = "#" + colorChanger;
   navLink.hover = colorGenerator;
}



