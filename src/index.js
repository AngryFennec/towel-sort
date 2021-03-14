
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  const res = [];
  matrix.forEach((item, i) => {
    if (i % 2 === 0) {
      item.forEach((num) => res.push(num));
    } else {
      const reverted = revert(item);
      reverted.forEach((num) => res.push(num));
    }
  })
  
  return res;
}

function revert(arr) {
  res = [];
  for (let i = arr.length-1; i >=0; i--) {
    res.push(arr[i]);
  }
  return res;
}
