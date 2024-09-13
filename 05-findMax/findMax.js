// write your func here
function findMax(arr) {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) max = element;
  });

  return max;
}

console.log(findMax([10, 15, -60, -1, 20, 8]));
