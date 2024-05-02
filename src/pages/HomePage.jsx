// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Row, Col, Card } from 'antd';
import { Chart as ChartJS} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const HomePage = () => {
  // Chart 1: Calories Intake
  const caloriesChartData = {
    labels: ['Achieved', 'Target'],
    datasets: [{
      data: [2500, 500], // Sample data
      backgroundColor: ['#3e95cd', '#8e5ea2'],
    }]
  };

  // Chart 2: Weight Data
  const weightChartData = {
    labels: ['Current', 'Target'],
    datasets: [{
      data: [70, 65], // Sample data
      backgroundColor: ['#71B37C', '#FFD700'],
    }]
  };

  // Chart 3: Workout Data
  const workoutChartData = {
    labels: ['Completed', 'Target'],
    datasets: [{
      data: [15, 30], // Sample data
      backgroundColor: ['#FF6384', '#36A2EB'],
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ padding: '20px', position: 'absolute', width: '100%', textAlign: 'center' }}>
      <h1>Dashboard</h1>
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
      <Row gutter={16} style={{ marginTop: '20px' }}>
        {['Chest', 'Arms', 'Shoulders', 'Back', 'Legs', 'Abs'].map((muscle) => (
          <Col span={8} key={muscle}>
            <Card hoverable title={muscle}>
              <p>Click on the card for detailed exercises</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;














// export default function HomePage() {
//   return (
//     <>
//       <div>
//         <h1>Home Page</h1>
//       </div>
//       <p>Welcome to the home page.</p>
//     </>
//   );
// }
