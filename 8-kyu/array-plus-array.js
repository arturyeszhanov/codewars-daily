// Title: Array plus array
// Codewars: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151


function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((sum, num) => sum + num, 0);
}