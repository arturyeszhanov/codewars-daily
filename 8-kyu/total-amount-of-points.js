// Title: Total amount of points
// Codewars: https://www.codewars.com/kata/5bb904724c47249b10000131


function points(games) {
    let sum = 0
    
    games.forEach(item => {
        const [xStr, yStr] = item.split(":")
      
        const x = Number(xStr)
        const y = Number(yStr)
        
        if (x > y) {
            return sum = sum + 3
        } else if(x === y) {
            return sum = sum + 1
        } 
        return sum      
    })
    
    return sum
}