const removeFromArray = function(array, ...args) {
  let excludedItems = [...args];
  let filteredArray = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (!excludedItems.includes(array[i])) filteredArray.push(array[i]);
  //   else continue; 
  // }

  /* 
  * Let's try to use forEach more often when dealing with arrays!.
  * The commented loop above works but is a bit not as easy to read.
  */
  array.forEach(item => {
    if(!excludedItems.includes(item)) filteredArray.push(item);
  });
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
