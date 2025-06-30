// Title: Get the Middle Character
// Codewars: https://www.codewars.com/kata/56747fd5cb988479af000028


function getMiddle(s) {
    
    const len = s.length
    const mid = Math.floor(len / 2)

    if (len % 2 === 0) {
        return s.slice(mid - 1, mid + 1)
    } else {
        return s.charAt(mid)
    }
}