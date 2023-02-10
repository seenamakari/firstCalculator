let finalExpression = "";

//Functions for the number buttons
const oneFunction = () => {
    document.getElementById("newResult").textContent += "1";
    finalExpression += "1";
}

const twoFunction = () => {
    document.getElementById("newResult").textContent += "2";
    finalExpression += "2";
}

const threeFunction = () => {
    document.getElementById("newResult").textContent += "3";
    finalExpression += "3";
}

const fourFunction = () => {
    document.getElementById("newResult").textContent += "4";
    finalExpression += "4";
}

const fiveFunction = () => {
    document.getElementById("newResult").textContent += "5";
    finalExpression += "5";
}

const sixFunction = () => {
    document.getElementById("newResult").textContent += "6";
    finalExpression += "6";
}

const sevenFunction = () => {
    document.getElementById("newResult").textContent += "7";
    finalExpression += "7";
}

const eightFunction = () => {
    document.getElementById("newResult").textContent += "8";
    finalExpression += "8";
}

const nineFunction = () => {
    document.getElementById("newResult").textContent += "9";
    finalExpression += "9";
}

const zeroFunction = () => {
    document.getElementById("newResult").textContent += "0";
    finalExpression += "0";
}


//Functions for the operator buttons
const additionFunction = () => {
    document.getElementById("newResult").textContent += " + ";
    finalExpression += " + ";
}

const subtractionFunction = () => {
    document.getElementById("newResult").textContent += " - ";
    finalExpression += " - ";
}

const multiplicationFunction = () => {
    document.getElementById("newResult").textContent += " * ";
    finalExpression += " * ";
}

const divisionFunction = () => {
    document.getElementById("newResult").textContent += " / ";
    finalExpression += " / ";
}

const equalsFunction = () => {
    document.getElementById("Result").textContent = eval(finalExpression);
    console.log(finalExpression);
  }

const clearFunction = () => {
    document.getElementById("Result").textContent = " ";
    document.getElementById("newResult").textContent = " ";
    finalExpression = " ";
}


//Button clicks for the numbers
document.getElementById("One").addEventListener("click", oneFunction);
document.getElementById("Two").addEventListener("click", twoFunction);
document.getElementById("Three").addEventListener("click", threeFunction);
document.getElementById("Four").addEventListener("click", fourFunction);
document.getElementById("Five").addEventListener("click", fiveFunction);
document.getElementById("Six").addEventListener("click", sixFunction);
document.getElementById("Seven").addEventListener("click", sevenFunction);
document.getElementById("Eight").addEventListener("click", eightFunction);
document.getElementById("Nine").addEventListener("click", nineFunction);
document.getElementById("Zero").addEventListener("click",zeroFunction);


//Button clicks for the operators
document.getElementById("Addition").addEventListener("click",additionFunction);
document.getElementById("Subtraction").addEventListener("click",subtractionFunction);
document.getElementById("Multiplication").addEventListener("click",multiplicationFunction);
document.getElementById("Division").addEventListener("click",divisionFunction);
document.getElementById("Equals").addEventListener("click",equalsFunction);
document.getElementById("Clear").addEventListener("click",clearFunction);

