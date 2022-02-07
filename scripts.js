//Name: Anastasiya Aleksandrova
//File Name: scripts.js
//Date: 11/15/21

//variable created to access form
var form = document.getElementById("form");
//function created that launches validation function once form is submitted
form.addEventListener("submit", function(event) {
//variables created to access input by user
  var phone = document.getElementById("phone").value, 
      city = document.getElementById("city").value,
      lname = document.getElementById("lname").value,
//pattern for upper/lower case letters
      testpattern = /[A-Za-z ]+/;
//pattern for phone number format
      matchit = /^\d{3}-\d{3}-\d{4}$/;
  event.preventDefault();
//if/else loop created to test form fields phone number, city, and last name
  if (!matchit.test(phone)) {
    alert("Please use format XXX-XXX-XXXX for phone number");
  } else if  (!testpattern.test(city)) {
      alert("Please ensure city is correct");
  } else if (!testpattern.test(lname)) {
      alert("Please ensure last name is correct");
  } 

}, false);