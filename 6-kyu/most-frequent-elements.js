// Codewars: https://www.codewars.com/kata/578b44a47c77f5a1bd000011

function getMostFrequent(json) {
    const result = json.temperature.map(subArr => {
        const counts = {}

        subArr.forEach(num => {
            counts[num] = (counts[num] || 0) + 1
        })
      
        let maxCount = 0
        
        for (const count of Object.values(counts)) {
            if (count > maxCount) maxCount = count
        }
      
        const mostFrequent = Object.keys(counts)
            .filter(num => counts[num] === maxCount)
            .map(Number)
      
        for (let i = subArr.length - 1; i >= 0; i--) {
            if (mostFrequent.includes(subArr[i])) {
                return subArr[i]
            }
        }
    })
    
    return result

}