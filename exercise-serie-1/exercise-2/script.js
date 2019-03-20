//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...


function plus(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("sum").innerHTML = sum;
}

function min(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 - num2;
    document.getElementById("sum").innerHTML = sum;
}

function maal(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 * num2;
    document.getElementById("sum").innerHTML = sum;
}

function deel(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 / num2;
    document.getElementById("sum").innerHTML = sum;
}