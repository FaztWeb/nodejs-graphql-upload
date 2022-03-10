const resolvers = {
  Query: {
    greetings: () => {
      return "Hello World";
    },
  },
};

module.exports = { resolvers };
