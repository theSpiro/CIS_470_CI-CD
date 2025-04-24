function compute(num1, num2, operator){

    let result;
    switch(operator){
        case '+':
            result = num1 + num2;
            return result;
        case '-':
            result = num1 - num2;
            return result;
        case '*':
            result = num1 * num2;
            return result;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by 0';
            return result;
        default:
            result = 'Invalid Operator';
            return result;

    }

}

module.exports = {compute} ;