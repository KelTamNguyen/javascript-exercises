const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let cleanString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
  let result = true;
  let i = 0;
  let j = cleanString.length - 1;
  while (i < j) {
    if (cleanString[i] !== cleanString[j]) {
      result = false;
      break;
    }
    i++;
    j--;
  }

  return result;
};

// Do not edit below this line
module.exports = palindromes;
