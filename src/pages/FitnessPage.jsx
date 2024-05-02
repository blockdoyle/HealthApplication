import { Menu, Button } from "antd";
import "./FitnessPage.css";

// Import fitness pages

export default function FitnessPage() {
  const menuItems = [
    {
      key: "1",
      label: "Arms",
    },
    {
      key: "2",
      label: "Legs",
    },
    {
      key: "3",
      label: "Core",
    },
    {
      key: "4",
      label: "Chest",
    },
    {
      key: "5",
      label: "Glutes",
    },
  ];
  return (
    <>
      <div className="muscle-menu" style={{ width: 256 }}>
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="main">{/* Add fitness pages here */}</div>
    </>
  );
}
