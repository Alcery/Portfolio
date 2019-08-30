"use strict";


// form validation
function validate() {
   var contactname = document.contactform.contactname;
   var contactemail = document.contactform.contactemail;
   var contactmessage = document.contactform.contactmessage;


   if (contactname.value == "") {
      alert("Please provide your name!");
      document.contactform.contactname.focus();
      return false;
   }
   if (contactemail.value == "") {
      alert("Please provide your Email!");
      document.contactform.contactemail.focus();
      return false;
   }
   if (contactmessage.value == "") {
      alert("Please write a message!");
      document.contactform.contactmessage.focus();
      return false;
   } else {
      return true;
   }
};





// nav color changer on hover
// window.addEventListener("load", colorGenerator);


// function colorGenerator() {
//    let colorChanger= Math.floor(Math.random() * 16777215).toString(16);
//    console.log(colorChanger);
//    const navLink = document.getElementsByClassName("nav-link");
//    navLink.style.color = "#" + colorChanger;
//    navLink.hover = colorGenerator;
// }




let navLink = document.getElementsByClassName("nav-link");
let colorChanger = Math.floor(Math.random() * 16777215).toString(16);
console.log(colorChanger);
// This event will activate every time the cursor
// is moved over a nav link
navLink[0].addEventListener("mouseenter", function (event) {
   // highlight the mouseenter target
   event.target.style.color = "#" + colorChanger;

   // reset the color after a short delay
   setTimeout(function () {
      event.target.style.color = "";
   }, 2000);
}, false);

// This event will activate every time the cursor
// is moved over a nav link
navLink[0].addEventListener("mouseover", function (event) {
   // highlight the mouseover target
   event.target.style.color = "#" + colorChanger;

   // reset the color after a short delay
   setTimeout(function () {
      event.target.style.color = "";
   }, 2000);
}, false);


// Nav Array (used later)
var nav = ["About", "Education", "Skills", "Services", "Contact"];