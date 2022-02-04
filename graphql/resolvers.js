import { people, getById } from "../database/db";

const resolvers = {
  Query: {
    people: () => people,
    person: (id) => getById(id),
  },
};

export default resolvers;
