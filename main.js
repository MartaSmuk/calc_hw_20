"use strict";

const getOperation = prompt("Choose actiion: add, sub, mult, div")
    .trim() //remove whitespace from the beginning and from the end of the string
    .toLowerCase();

const firstOperand = +prompt("Please enter first operand")
    .trim();

const secondOperand = +prompt("Please enter second operand")
    .trim();


if(isNaN(firstOperand) || isNaN(secondOperand)) {
    document.write("Please enter correct Number!")
} else {
    switch (getOperation) {
        case "add":
            document.write(`${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
            break;
        case "sub":
            document.write(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
            break;
        case "mult":
            document.write(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
            break;
        case "div":
            if(secondOperand === 0) {
                document.write(`Division through 0 is not possible!`)
            } else {
                document.write(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
            }
            break;
        default:
            document.write(`ERROR`)
    }
}


