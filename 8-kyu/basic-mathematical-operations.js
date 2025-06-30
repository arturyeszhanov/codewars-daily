// Title: Basic Mathematical Operations
// Codewars: https://www.codewars.com/kata/57356c55867b9b7a60000bd7


function basicOp(operation, value1, value2){

    let result = 0
    
    switch(operation) {
        case '+':
          result = value1 + value2
        break
        
        case '-':
          result = value1 - value2
        break
        
        case '*':
          result = value1 * value2
        break
        
        case '/':
          result = value1 / value2
        break
    }
    
    return result
}