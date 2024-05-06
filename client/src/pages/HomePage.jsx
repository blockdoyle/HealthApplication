// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomePageComponent from '../components/HomePage';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-wrapper" style={{ padding: '20px', textAlign: 'center' }}>
            <h1 className='chart-heading'>Your Fitness Dashboard</h1>
            <HomePageComponent />
        </div>
    );
};

export default HomePage;
