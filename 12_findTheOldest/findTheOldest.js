const findTheOldest = function(people) {
  var holdName = "";
  var holdAge = 0;
  var currentYear = new Date().getFullYear();
  
  for (person of people) {
    if (person.yearOfDeath) {
      var personAge = person.yearOfDeath - person.yearOfBirth;
      if (personAge > holdAge) {
        holdAge = personAge;
        holdName = person.name;
        console.log("1st if: " + holdName);
      }
    } else {
      var personAge = currentYear - person.yearOfBirth;
      if (personAge > holdAge) {
        holdAge = personAge;
        holdName = person.name;
        console.log("2nd if: " + holdName);
      }
    }
  }
  var oldest = people.find(item => item.name = holdName);
  return oldest;
};

/* const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]


test = findTheOldest(people);
console.log(test); */

// Do not edit below this line
module.exports = findTheOldest;
