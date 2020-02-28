let numberOne = window.prompt("Let's do some basic calculation. Input the first number here!");
let numberTwo = window.prompt("Then input the second number..");
let operType = window.prompt("Choose type of calcutor operation: add, subtract, multiply, or divide (+, -, *, /)? ");
function checkValidOperation(operType) {
    let isOperationValid;
    if (
        operType === "+" ||
        operType === "-" ||
        operType === "*" ||
        operType === "/"
    ) {
      isOperationValid = true;
    } else {
      isOperationValid = false;
    }
    return isOperationValid;
  }
function calculate() {
   
    let result;
    let x = parseFloat(numberOne);
    let y = parseFloat(numberTwo);
    let validOperation;    
    validOperation = checkValidOperation(operType);
    
if (validOperation)   {calculate();} else {window.alert("You chose the non math operation medthod. Try again!");}
if (operType === "add" || operType === "+" ) { result = x + y; };
if (operType === "subtract" || operType === "-") { result = x - y; };
if (operType === "multiply" || operType === "*") { result = x * y; };
if (operType === "divide" || operType === "/") { result = x / y; };
    window.alert(numberOne + operType + numberTwo + " = " + result);


}
calculate();
    

