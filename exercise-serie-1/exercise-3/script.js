//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function clearForms() {
    document.getElementById("formclear").reset();
  }


function clearAll(){
    name = document.getElementById("inputName").value;
    power = document.getElementById("inputPower").value;
    motivation = document.getElementById("inputMotivation").value;
    plan = document.getElementById("inputPlan").value;
    let x = document.getElementById("formclear");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    document.getElementById("output").innerHTML = '<h1>Super Vilain Story</h1><br><h3>Super vilain name: </h3>' + name + '<h3>Super power: </h3>' + power + '<h3>Motivation: </h3>' + motivation + '<h3>Plan to conquer the world: </h3>' + plan;
}

