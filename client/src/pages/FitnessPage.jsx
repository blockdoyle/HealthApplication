import React, { useState } from 'react';
import { Menu } from 'antd';
import ArmWorkoutComponent from '../components/ArmWorkout';
import AbsWorkout from '../components/AbsWorkout';
import ChestWorkout from '../components/ChestWorkout';
import LegsWorkout from '../components/LegsWorkout';
import './FitnessPage.css';

export default function FitnessPage() {
  const [currentPage, setCurrentPage] = useState('1');

  const menuItems = [
    { key: "1", label: "Arms", component: <ArmWorkoutComponent /> },
    { key: "2", label: "Legs", component: <LegsWorkout />  },
    { key: "3", label: "Core", component: <AbsWorkout />  },
    { key: "4", label: "Chest", component: <ChestWorkout />  },
    { key: "5", label: "Glutes", component: null },
  ];

  return (
    <>
      <div className="muscle-menu" style={{ width: 256 }}>
        <Menu 
          defaultSelectedKeys={['1']} 
          mode="inline"
          items={menuItems.map(item => ({
            key: item.key,
            label: item.label,
            onClick: () => setCurrentPage(item.key)
          }))}
        />
      </div>
      <div className="main">
        {menuItems.find(item => item.key === currentPage)?.component}
      </div>
    </>
  );
}
