const findTheOldest = function(people) {
    oldestPerson = "";
    oldestAge = 0;
    ageCheck = 0;
    for (person of people) {
        ageCheck = person.yearOfDeath - person.yearOfBirth;
        if (ageCheck > oldestAge) {
            oldestAge = ageCheck;
            //console.log("The oldest age is: " + oldestAge);
            oldestPerson = person.name;
            //console.log("The current oldest person is: " + oldestPerson);
        }
    }
return oldestPerson;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
console.log(test);


// Do not edit below this line
module.exports = findTheOldest;
