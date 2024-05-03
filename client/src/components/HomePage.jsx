// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Row, Col, Card } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
import { useUserData } from '../context/userDataContext';
import { useNavigate } from 'react-router-dom';


const HomePageComponent = () => {
    const { userData } = useUserData();
    const navigate = useNavigate(); // Hook for navigation

    // Defining exercise data
    const exercises = [
        { name: 'Chest', path: '/exercises/chest' },
        { name: 'Arms', path: '/exercises/arms' },
        { name: 'Shoulders', path: '/exercises/shoulders' },
        { name: 'Back', path: '/exercises/back' },
        { name: 'Legs', path: '/exercises/legs' },
        { name: 'Abs', path: '/exercises/abs' }
    ];

    // Card click handler
    const handleCardClick = (path) => {
        navigate(path);
    };

    // chart data based on user data
    const caloriesChartData = {
        labels: ['Calories Consumed', 'Calories Goal'],
        datasets: [{
            data: [userData.calories || 0, userData.caloriesGoal || 2000],
            backgroundColor: ['#FF6384', '#36A2EB'],
        }],
    };

    const weightChartData = {
        labels: ['Current Weight', 'Goal Weight'],
        datasets: [{
            data: [userData.weight || 0, userData.goalWeight || 70],
            backgroundColor: ['#71B37C', '#FFD700'],
        }],
    };

    const workoutChartData = {
        labels: ['Workout Completed', 'Workout Target'],
        datasets: [{
            data: [userData.workoutCompleted || 0, userData.workoutTarget || 30],
            backgroundColor: ['#3e95cd', '#8e5ea2'],
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Calories Intake vs Target">
                        <Doughnut data={caloriesChartData} options={options} />
                    </Card>
                </Col>
            
                <Col span={8}>
                    <Card title="Current Weight vs Target">
                        <Doughnut data={weightChartData} options={options} />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="Workout Progress vs Target">
                        <Doughnut data={workoutChartData} options={options} />
                    </Card>
                </Col>
            </Row>
            
            <h1>Fitness Zone: Tailored Workouts For Every Muscle</h1>
            <Row gutter={16} style={{ marginTop: '20px' }}>                
                {exercises.map((exercise) => (
                    <Col span={8} key={exercise.name}>
                        <Card
                            hoverable
                            title={exercise.name}
                            onClick={() => handleCardClick(exercise.path)}
                        >
                            <p>Click on the card for detailed exercises</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomePageComponent;