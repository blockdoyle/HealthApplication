import React, { useState } from 'react';
import { Menu } from 'antd';
import ArmWorkoutComponent from '../components/ArmWorkout';

export default function FitnessPage() {
  const [currentPage, setCurrentPage] = useState('1');

  const menuItems = [
    { key: "1", label: "Arms", component: <ArmWorkoutComponent /> },
    { key: "2", label: "Legs", component: null },
    { key: "3", label: "Core", component: null },
    { key: "4", label: "Chest", component: null },
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
