const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    sex: String
    height: Float
    heightUnit: String
    weight: Float
    weightUnit: String
    age: Int
    maximumCaloricIntake: Int
    favouriteExercises: [String]
    fitnessGoals: [String]
  }

  input UserInput {
    email: String!
    password: String!
    sex: String
    height: Float
    heightUnit: String
    weight: Float
    weightUnit: String
    age: Int
    maximumCaloricIntake: Int
    favouriteExercises: [String]
    fitnessGoals: [String]
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Calorie {
    id: ID!
    user: User!
    date: String!
    daily_calorie_intake: Int!
    daily_calorie_expenditure: Int!
    net_calorie_balance: Int!
    soft_max_caloric_intake: Int!
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
    addUser(input: UserInput!): AuthPayload
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User

    addCalorieIntake(intake: Int!): Calorie
    addExercise(
      name: String!
      caloriesBurned: Int!
      sets: Int!
      reps: Int!
      bodyPart: String!
    ): Exercise
    updateExercise(
      id: ID!
      name: String
      caloriesBurned: Int
      sets: Int
      reps: Int
      bodyPart: String
    ): Exercise
    deleteExercise(id: ID!): Exercise
    addSupplement(name: String!, description: String, price: Float!): Supplement
    updateSupplement(
      id: ID!
      name: String
      description: String
      price: Float
    ): Supplement
    deleteSupplement(id: ID!): Supplement
    addWeightEntry(weight: Float!): Weight
  }
`;

module.exports = typeDefs;
