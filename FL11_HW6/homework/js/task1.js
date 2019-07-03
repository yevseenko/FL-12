// const a1 = prompt('enter x for point A');
// const a2 = prompt('enter y for point A');
// const b1 = prompt('enter x for point B');
// const b2 = prompt('enter y for point B');
// const c1 = prompt('enter x for point C');
// const c2 = prompt('enter y for point C');

const isMidpoint = (a1, a2, b1, b2, c1, c2) => {
  return (a1 + b1) / 2 == c1 && (a2 + b2) / 2 == c2;
}

console.log(isMidpoint(1, 1, 3, 3, 2, 2));
console.log(isMidpoint(1, 5, -4, 5, -1.5, 5));
console.log(isMidpoint(1, 6, -1, -3, 0, 1.5));
console.log(isMidpoint(5, 1, 4, -2, 4.5, -0.5));