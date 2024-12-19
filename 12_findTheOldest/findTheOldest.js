const findTheOldest = function(array) {
  // this is a valid solution, but a very bad one.
  return array.sort((a, b) => getAge(b) - getAge(a))[0];
};

const getAge = function(person) {
  if (person.yearOfDeath) return person.yearOfDeath - person.yearOfBirth;
  else {
    let year = new Date().getFullYear();
    return year - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
