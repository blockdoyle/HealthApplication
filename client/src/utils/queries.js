import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GetMe {
    me {
      id
      email
      sex
      height
      heightUnit
      weight
      weightUnit
      fitnessGoals
      age
      maximumCaloricIntake
      favouriteExercises
    }
  }
`;

export const GET_EXERCISES = gql`
  query GetExercises {
    allExercises {
      id
      name
      caloriesBurned
      reps
      sets
      bodyPart
    }
  }
`;
