function hi() {
  var passwordName = document.getElementById("password").value;
  var firstName = document.getElementById("firstName").value;
  var firstNameUpperCase = firstName.charAt(0).toUpperCase();
  var firstNameLowerCase = firstName.slice(1, firstName.length).toLowerCase();
  var firstNameFull = firstNameUpperCase + firstNameLowerCase;
  if (passwordName === "Kathitisthebest") {
    alert("Hi " + firstNameFull + ", welcome to my website");
    document.querySelectorAll("a")[0].href="real.html";
  } else if (firstNameFull === "Feduniw" && passwordName === "Iamthebest") {
    alert("Hello Ms.Feduniw, welcome to my website");
    document.querySelectorAll("a")[0].href="real.html";
  } else if (firstNameFull === "Cindy" && passwordName === "Iamthebest") {
    alert("Hello Ms.Feduniw, welcome to my website");
    document.querySelectorAll("a")[0].href="real.html";
  } else {
    alert(
      "Hi " + firstNameFull + ", please try again. Password is incorrect, Retry"
    );
  }
}
  var input1 = document.getElementById("password");
input1.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
var input2 = document.getElementById("firstName");
input2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   document.getElementById("password").focus();
  }
});