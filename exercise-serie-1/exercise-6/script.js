//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let images = [];
let i = 0;

function imageBuilder(){
    for(i=1; i<12; i++){
        images.push(`images/cat${i}.png`);
    }
    /* $(".spanloader").hide();
    $("#my_image").attr("src", `images/cat${i}.png`); */
}

document.getElementById("myFrame").onload = function() {myFunction()};

function imageBuilder() {
    for(i=0; i<12; i++){
    document.getElementById("my_image").src = images[i];
}