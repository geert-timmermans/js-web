//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
$(function() {

    //populate our years select box
    for (i = new Date().getFullYear(); i > 1900; i--){
        $('#years').append($('<option />').val(i).html(i));
    }
    //populate our months select box
    for (i = 1; i < 13; i++){
        $('#months').append($('<option />').val(i).html(i));
    }
    //populate our Days select box
    updateNumberOfDays(); 

    //"listen" for change events
    $('#years, #months').change(function(){
        updateNumberOfDays(); 
    });

});

//function to update the days based on the current values of month and year
function updateNumberOfDays(){
    $('#days').html('');
    month = $('#months').val();
    year = $('#years').val();
    days = daysInMonth(month, year);

    for(i=1; i < days+1 ; i++){
            $('#days').append($('<option />').val(i).html(i));
    }
}

//helper function
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}


//Calculate age
function calcAge(){
    let d = document.getElementById("days").value;
    let m = document.getElementById("months").value;
    let y = document.getElementById("years").value;
    let date = new Date(y + "-" + m + "-" + d);
    let today = new Date();

    var timeDiff = Math.abs(today.getTime() - date.getTime());
    var age1 = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
    
    console.log(age1);

    return age1;
}

function tester(){
    var a = Math.floor(calcAge());
    document.getElementById("output").innerHTML = a;
}