const findTheOldest = function (arr) {
  const oldest = arr.sort((a, b) => {
    if (!("yearOfDeath" in a)) {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (!("yearOfDeath" in b)) {
      b.yearOfDeath = new Date().getFullYear();
    }
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
