import { gql } from '@apollo/client';

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
