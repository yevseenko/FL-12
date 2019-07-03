const isTriangle = (a, b, c) => {
  if (
    a < b + c
    & b < c + a
    & c < b + a
    & a > 0
    & b > 0
    & c > 0) {
    if (a === b & b === c & c === a) {
      return 'Eequivalent triangle';
    } else if (a === b || a === c || b === c) {
      return 'Isosceles triangle';
    } else {
      return 'Normal triangle';
    }
  } else {
    return 'Triangle doesn’t exist';
  }
}

console.log(isTriangle(5, 5, 5));
console.log(isTriangle(5, 5, 6));
console.log(isTriangle(3, 4, 5));
console.log(isTriangle(10, 2, 7));
