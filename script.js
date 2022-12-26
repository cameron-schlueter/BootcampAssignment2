var button1 = document.getElementById("MSU-Bootcamp-Work");
var button2 = document.getElementById("Fun-Projects");
    
       
document.getElementById("MSU-Bootcamp-Work").addEventListener("click", function() {
    document.getElementById("msu").scrollIntoView();
  });

document.getElementById("Fun-Projects").addEventListener("click", function() {
    document.getElementById("fun").scrollIntoView();
  });