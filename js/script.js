// function convertohex() {
//     var redtemp = redrange.value;
//     var i = 1,
//         j, rem;
//     var hexa = [];
//     var hexcode = document.getElementById("hexcode");
//     var redstr = [];

//     while (redtemp != 0) {
//         rem = redtemp % 16;
//         if (rem < 10) {

//             hexa[i++] = rem + 48;
//         } else {

//             hexa[i++] = rem + 55;

//         }
//         redtemp = redtemp / 16;
//     }

//     for (j in hexa) {

//         redstr[j] += String.fromCharCode(hexa[j])


//     }
//     for (j = i; j > 0; j--) {
//         hexcode.innerHTML = redstr[];
//     }


// }

var redrange = document.getElementById("redrange");
var redvalue = document.getElementById("redvalue");
var redv = document.getElementById("redv");
var hexcode = document.getElementById("hexcode");


var greenrange = document.getElementById("greenrange");
var greenvalue = document.getElementById("greenvalue");
var greenv = document.getElementById("greenv");


var bluerange = document.getElementById("bluerange");
var bluevalue = document.getElementById("bluevalue");
var bluev = document.getElementById("bluev");


function redconverthex() {
    var x = redrange.value;
    hexcodered.innerHTML = Number(x).toString(16).toUpperCase();
}

function greenconverthex() {
    var y = greenrange.value;
    hexcodegreen.innerHTML = Number(y).toString(16).toUpperCase();
}

function blueconverthex() {
    var z = bluerange.value;
    hexcodeblue.innerHTML = Number(z).toString(16).toUpperCase();
    console.log(hexcodeblue.innerHTML);
}




function changecolor() {
    var select_color = document.getElementById("select_color");
    select_color.style.backgroundColor = 'rgb(' + redrange.value + ',' + greenrange.value + ',' + bluerange.value + ')';

}



redrange.oninput = function() {
    redvalue.innerHTML = this.value;
    redv.innerHTML = this.value;
    changecolor()

    redconverthex()

}

greenrange.oninput = function() {
    greenvalue.innerHTML = this.value;
    greenv.innerHTML = this.value;
    changecolor()
    greenconverthex()
}

bluerange.oninput = function() {
    bluevalue.innerHTML = this.value;
    bluev.innerHTML = this.value;
    changecolor()
    blueconverthex()

}