var color;
var hexCode;
const inpObj = document.getElementById("code");

function generateColor(){
    let r = Math.floor((Math.random()*255)+1);
    let g = Math.floor((Math.random()*255)+1);
    let b = Math.floor((Math.random()*255)+1);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function hex(value){
    $("body").css("background-color", value);
    $("p").text(value);
    inpObj.classList.remove("error");
    $("p").removeClass("errorMsg");
}

function errors(){
    document.getElementById("hexCode").innerHTML = "Invalid";
    inpObj.classList.add("error");
    $("p").addClass("errorMsg");
}

$(".button").click(function(){
    color = generateColor();
    hex(color);
    inpObj.classList.remove("error");
    document.getElementById("code").value = "";
    $("p").removeClass("errorMsg");
});

$(".submit").click(function () { 

    if (!inpObj.validity.patternMismatch) {
        hexCode=inpObj.value;
        inpObj.value = "";
        hex(hexCode);
    }
    else{
        errors();
    }
});

$("#code").keypress(function (event) { 

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        if (!inpObj.validity.patternMismatch){
            hexCode=document.getElementById("code").value;
            document.getElementById("code").value = "";
            hex(hexCode);
        }
        else{
            errors();
        }
    }
});







