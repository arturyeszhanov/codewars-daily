// Title: If you can't sleep, just count sheep!!
// Codewars: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077


var countSheep = function (num){

    if(num ===0) return ''

    let i = 1
    let arr = []

    while(i <= num) {
      arr.push(i)
      i++
    }

    return arr
            .map(sheep => sheep + ' sheep...')
            .join('')
}