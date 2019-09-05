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

// Email regex
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(inputText.value.match(mailformat))
   {
   document.contactform.contactemail.focus();
   return true;
   }
   else
   {
   alert("You have entered an invalid email address!");
   document.contactform.contactemail.focus();
   return false;
   }
}






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
// is moved onto a nav link
navLink[0].addEventListener("mouseenter", function (event) {
   console.log(navLink);
   // highlight the mouseenter target
   event.target.style.color = "#" + colorChanger;

   // reset the color after a short delay
   setTimeout(function () {
      event.target.style.color = "";
   }, 700);
}, false);

// This event will activate every time the cursor
// is moved over a nav link
navLink[1].addEventListener("mouseover", function (event) {
   // highlight the mouseover target
   event.target.style.color = "#" + colorChanger;

   // reset the color after a short delay
   setTimeout(function () {
      event.target.style.color = "";
   }, 700);
}, false);
navLink[2].addEventListener("mouseover", function (event) {
   // highlight the mouseover target
   event.target.style.color = "#" + colorChanger;

   // reset the color after a short delay
   setTimeout(function () {
      event.target.style.color = "";
   }, 700);
}, false);
navLink[3].addEventListener("mouseover", function (event) {
   // highlight the mouseover target
   event.target.style.color = "#" + colorChanger;

   // reset the color after a short delay
   setTimeout(function () {
      event.target.style.color = "";
   }, 700);
}, false);
navLink[4].addEventListener("mouseover", function (event) {
   // highlight the mouseover target
   event.target.style.color = "#" + colorChanger;

   // reset the color after a short delay
   setTimeout(function () {
      event.target.style.color = "";
   }, 700);
}, false);


// Nav Array (used later)
var nav = ["About", "Education", "Skills", "Services", "Contact"];