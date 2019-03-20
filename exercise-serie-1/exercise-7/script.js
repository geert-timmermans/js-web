//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

$(function(){
    $("button").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*200)+"px",
                top:(Math.random()*200)+"px",
            });
        }
    });
});