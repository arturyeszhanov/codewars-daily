/*
Description:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.

FundamentalsStringsArrays
*/


function check(a, x) {
    return a.some(findElement => findElement === x)
  }