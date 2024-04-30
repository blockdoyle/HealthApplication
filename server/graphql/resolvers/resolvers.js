module.exports = {
  Mutation: {
    async createUser(_, { username, email, password }) {
      return {
        username,
        email,
        token: "token",
      };
    },
  },
};
