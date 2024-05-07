// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Row, Col, Card } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
import { useUserData } from '../context/userDataContext';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

import chestWorkout from '../assets/chest.jpg';
import armsWorkout from '../assets/arms.jpg';
import shoulderWorkout from '../assets/shoulder_2.jpg';
import backWorkout from '../assets/back_3.jpg';
import legsWorkout from '../assets/legs.jpg';
import absWorkout from '../assets/abs.jpg';


const HomePageComponent = () => {
    const { userData } = useUserData();
    const navigate = useNavigate(); // Hook for navigation

    // Defining exercise data
    const exercises = [
        { name: 'Chest', path: '/exercises/chest', imageUrl: chestWorkout},
        { name: 'Arms', path: '/exercises/arms',  imageUrl: armsWorkout},
        { name: 'Shoulders', path: '/exercises/shoulders',  imageUrl: shoulderWorkout},
        { name: 'Back', path: '/exercises/back',  imageUrl: backWorkout},
        { name: 'Legs', path: '/exercises/legs',  imageUrl: legsWorkout},
        { name: 'Abs', path: '/exercises/abs',  imageUrl: absWorkout}
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
        plugins: {
            legend: {
                labels: {
                    color: '#faf8f8'
                }
            },
        },
    };

    return (
        <div className="home-page-container">
            <Row gutter={16}>
                <Col span={8}>
                    <Card className="card-container">
                        <h2 className="chart-title">Calories Intake vs Target</h2>
                        <div className="chart-container">
                            <Doughnut data={caloriesChartData} options={options} />
                        </div>
                    </Card>
                </Col>
            
                <Col span={8}>
                    <Card className="card-container">
                        <h2 className="chart-title">Current Weight vs Target</h2>
                        <div className="chart-container">
                            <Doughnut data={weightChartData} options={options} />
                        </div>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card className="card-container">
                        <h2 className="chart-title">Workout Progress vs Target</h2>
                        <div className="chart-container">
                            <Doughnut data={workoutChartData} options={options} />
                        </div>
                    </Card>
                </Col>
            </Row>
            
            <h1 className='workout-title'>Fitness Zone: Tailored Workouts For Every Muscle</h1>
            <Row gutter={16} style={{ marginTop: '20px' }}>                
                {exercises.map((exercise) => (
                    <Col xs={24} sm={12} md={16} lg={12} xl={8} key={exercise.name}>
                        <Card
                            hoverable
                            title= {<span style={{ color: '#ffff', fontSize: '30px', fontWeight: 'bold', textDecoration: 'none' }}>{exercise.name}</span>}
                            onClick={() => handleCardClick(exercise.path)}
                            className="exercise-card"
                            style={{ 
                                backgroundImage: `url(${exercise.imageUrl})`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center' ,
                                display: 'flex',
                                // flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '200px',
                                width: '100%', 
                                marginBottom: '16px',
                                boxShadow: '2px 2px 4px rgba(250, 250, 250, 0.8)',
                                // border: 'none'
                            }}
                        >
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomePageComponent;