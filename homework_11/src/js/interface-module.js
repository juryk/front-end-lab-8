import calculatorControl from './calculating-module.js';
import '../styles/styles.css';

(function(){

    function createButton(operation, sign){
        let button = document.createElement("button");
        button.classList.add(operation);
        button.innerHTML = sign;
        button.addEventListener("click", clickCallback);
        return button;
    }

    function clickCallback(event) {
        let operation = event.target.className;
        let firstValue  = +document.querySelector(".first-value").value;
        let secondValue = +document.querySelector(".second-value").value;
        calculatorControl(firstValue, secondValue, operation);
    }

    let body = document.body;
    let container = document.createElement("div");
    container.classList.add("container")

    let firstInput = document.createElement("input");
    firstInput.classList.add("first-value");
    firstInput.placeholder = "Value";
    container.appendChild(firstInput);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    buttons.appendChild(createButton("plus", "+"));
    buttons.appendChild(createButton("minus", "-"));
    buttons.appendChild(createButton("multiply", "*"));
    buttons.appendChild(createButton("divide", "÷"));

    container.appendChild(buttons);

    let secondInput = document.createElement("input");
    secondInput.classList.add("second-value");
    secondInput.placeholder = "Value";

    container.appendChild(secondInput);

    body.appendChild(container);
})()
