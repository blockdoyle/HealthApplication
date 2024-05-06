import React from "react";
import { useQuery } from "@apollo/client";
import { Row, Col, Card } from "antd";
import "./common.css";
import { GET_EXERCISES } from "../utils/queries";

const Back = () => {
  const { data, loading, error } = useQuery(GET_EXERCISES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const armExercises = data.allExercises.filter(
    (exercise) => exercise.bodyPart === "Back"
  );

  return (
    <div>
      <h1 className="arm-workout-header">Back Workouts</h1>
      <Row gutter={[16, 16]} justify="center">
        {armExercises.map((exercise, index) => (
          <Col key={exercise.id} xs={24} sm={12} lg={8}>
            <Card
              className="card-style"
              title={`${index + 1}. ${exercise.name}`}
              bordered={false}
            >
              <p>Calories Burned: {exercise.caloriesBurned}</p>
              <p>Sets: {exercise.sets}</p>
              <p>Reps: {exercise.reps}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Back;
