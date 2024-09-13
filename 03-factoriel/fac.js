// write your func here

// function fac(num) {
//   let sum = 1;
//   for (let index = 1; index <= num; index++) {
//     sum *= index;
//   }

//   return sum;
// }

function fac(num) {
  let arr = [];
  for (let index = 0; index < num; index++) {
    arr.push(index + 1);
  }

  return arr.reduce((acc, current) => {
    return acc * current;
  }, 1);
}

console.log(fac(5));
console.log(fac(10));
console.log(fac(20));
