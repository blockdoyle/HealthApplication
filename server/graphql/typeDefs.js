const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    username: String!
    email: String!
    token: String!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }

  type Query {
    hello: String
  }
`;
