// Title: Highest and Lowest
// Codewars: https://www.codewars.com/kata/554b4ac871d6813a03000035


function highAndLow(numbers){
    
    let arr = numbers.split(' ').map(Number)
    let max = arr[0]
    let min = arr[0]
    
    for(let i = 1; i < arr.length; i++) {
      if(max < arr[i]) {
        max = arr[i]
      } else if(min > arr[i]) {
        min = arr[i].toString()
      }
    }
    
    return max + ' ' + min
}