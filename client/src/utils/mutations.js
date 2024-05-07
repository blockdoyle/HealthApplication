import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($input: UserInput!) {
    addUser(input: $input) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
      id
      email
      height
      heightUnit
      weight
      weightUnit
      sex
      fitnessGoals
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const ADD_WEIGHT = gql`
  mutation AddWeight($userId: ID!, $weight: Float!, $goalWeight: Float!) {
    addWeight(userId: $userId, weight: $weight, goalWeight: $goalWeight) {
      id
      weight
      goalWeight
    }
  }
`;
