// write your func here

// function revers(str) {
//   let sum = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     sum += str[i];
//   }
//   return sum;
// }
function revers(str) {
  return str.split("").reverse().join("");
}

console.log(revers("this is a string from hw03"));
