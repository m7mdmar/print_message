var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEle = document.getElementById("msg");
var error = document.getElementById("err");
let body = document.querySelector("body");

// variable text from a input
buttonEle.onclick = function () {
    var inputValue = inputEle.value;

    if (inputValue != '') {
        msgEle.innerHTML = inputValue;
        error.innerHTML = ' ';
        msgEle.style.color = "green"
    }
    else {
        function time() {
            error.innerHTML = " ";
        };
        error.innerHTML = "not a message";
        error.style.color = "red";
        body.style.backgroundColor = "red";
        msgEle.innerHTML = ' ';
        setTimeout(time, 3000);
    }
}
// back ground BTn changer 
buttonEle.addEventListener('click', function onClick() {
    var inputValue = inputEle.value;
    if (inputValue != '') {
        buttonEle.style.backgroundColor = "green";
        body.style.backgroundColor = "green";
    }
    else {
        buttonEle.style.backgroundColor = "red";
    }
});
// event click enter
inputEle.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Trigger the button element with a click
        buttonEle.click();
    }
});

////////////////////// learning /////////////////////////////

// arrow function

x = 6;
var test = x => console.log(x);
test(x);

//default params

function printprams(a = 1, b = 9) {
    console.log(a + b)
}

printprams();
