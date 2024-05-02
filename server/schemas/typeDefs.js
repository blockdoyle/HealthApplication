const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Calorie {
    id: ID!
    user: User!
    intake: Int!
    date: String!
  }

  type Exercise {
    id: ID!
    name: String!
    caloriesBurned: Int!
    sets: Int!
    reps: Int!
    bodyPart: String!
  }

  type Supplement {
    id: ID!
    name: String!
    description: String
    price: Float!
  }

  type Weight {
    id: ID!
    user: User!
    weight: Float!
    date: String!
  }

  type Query {
    me: User
    dailyCalorieIntake: [Calorie]  
    allExercises: [Exercise]
    getExerciseById(id: ID!): Exercise
    allSupplements: [Supplement]
    getSupplementById(id: ID!): Supplement
    dailyWeightEntries: [Weight]
  }
  
  type Mutation {
    login(email: String!, password: String!): AuthPayload
    addUser(username: String!, email: String!, password: String!): AuthPayload
    addCalorieIntake(intake: Int!): Calorie
    addExercise(name: String!, caloriesBurned: Int!, sets: Int!, reps: Int!, bodyPart: String!): Exercise
    updateExercise(id: ID!, name: String, caloriesBurned: Int, sets: Int, reps: Int, bodyPart: String): Exercise
    deleteExercise(id: ID!): Exercise
    addSupplement(name: String!, description: String, price: Float!): Supplement
    updateSupplement(id: ID!, name: String, description: String, price: Float): Supplement
    deleteSupplement(id: ID!): Supplement
    addWeightEntry(weight: Float!): Weight
  }
`;

module.exports = typeDefs;