
document.addEventListener("DOMContentLoaded", function(){

  // var state = 1
var button = document.querySelector("button");

  button.addEventListener("click", function(){
  var body = document.querySelector("body");
  var text = document.querySelector(".status");

  if (button.getAttribute("class") === "switch on") {
    body.setAttribute("class", "dark");
    button.setAttribute("class","switch off");
    text.innerHTML = "Hey who turned off the lights?"
  } else {
    body.setAttribute("class", "light");
    button.setAttribute("class","switch on");
    text.innerHTML = "It's so bright in here!"
  };
});



});
