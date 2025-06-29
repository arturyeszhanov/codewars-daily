// Title: Descending Order
// Codewars: https://www.codewars.com/kata/5467e4d82edf8bbf40000155


function descendingOrder(n){
    const num = n.toString().split('')
    const compareFn = (a, b) => b - a
    const result = num.sort(compareFn).join('')
    
    return Number(result)
}