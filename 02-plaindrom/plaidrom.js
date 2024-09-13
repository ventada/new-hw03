// write your func here
function revers(str) {
  return str.split("").reverse().join("");
}

function plaindrom(str) {
  return str === revers(str);
}

console.log(plaindrom("racecar"));
console.log(plaindrom(";sidfjsjf"));
