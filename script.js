
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
document.getElementById('resetButton').addEventListener('click', ()=>{
  resetForm();
});

document.getElementById('sendButton').addEventListener('click', ()=>{
  displayForm();
});

function resetForm(){
  document.getElementById("name").value = "";
  document.getElementById("superpower").value = "";
  document.getElementById("motivation").value = "";
  document.getElementById("plan").value = "";
}

function displayForm(){
  var name = document.getElementById("name").value;
  var superPower = document.getElementById("superpower").value;
  var motivation = document.getElementById("motivation").value;
  var plan = document.getElementById("plan").value;

  var elem = document.getElementById("datas");
  elem.parentNode.removeChild(elem);
  elem = document.getElementById("buttons");
  elem.parentNode.removeChild(elem);

  document.getElementById("formulaire").innerHTML = "Your vilain name is " + name +
  "</br> Your super power is " + superPower + "</br>Your motivation is " + motivation + 
  "</br> Your plan is " + plan;
}