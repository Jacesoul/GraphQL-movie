const Jace = {
  name: "jace",
  age: 33,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => Jace,
  },
};

export default resolvers;
