function add(num1, num2){
    return num1+num2;
}
function substract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}

function calculator(num1,num2,operate){
    return operate(num1,num2);
}