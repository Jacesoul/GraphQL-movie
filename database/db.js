export const people = [
  {
    name: "jace",
    age: 33,
    gender: "male",
    id: "0",
  },
  {
    name: "june",
    age: 23,
    gender: "male",
    id: "1",
  },
  {
    name: "jane",
    age: 16,
    gender: "male",
    id: "2",
  },
  {
    name: "jimmy",
    age: 25,
    gender: "male",
    id: "3",
  },
  {
    name: "july",
    age: 45,
    gender: "male",
    id: "4",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
