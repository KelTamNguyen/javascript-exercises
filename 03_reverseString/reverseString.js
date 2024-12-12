const reverseString = function(string) {
  let arr = string.split('');
  for (let i = 0; i <= string.length/2; i++) {
    let temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
