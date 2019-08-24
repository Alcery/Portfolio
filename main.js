"use strict";


// form validation
function validateForm() {
    var email = document.forms["contactform"]["email"].value;
    var subject = document.forms["contactform"]["subject"].value;
    var text = document.forms["contactform"]["text"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (subject == "") {
      alert("Subject must be filled out");
      return false;
    }
    if (text == "") {
      alert("Must have a message");
      return false;
    }
  }