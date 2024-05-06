import { Col, Row } from "antd";
import React from "react";
import "./sideBar.css";
import { useLocation, useParams, useRoutes } from "react-router-dom";

const SideBar = ({ children }) => {
  const { pathname } = useLocation();
  const exercises = [
    { name: "Chest", path: "/exercises/chest" },
    { name: "Arms", path: "/exercises/arms" },
    { name: "Shoulders", path: "/exercises/shoulders" },
    { name: "Back", path: "/exercises/back" },
    { name: "Legs", path: "/exercises/legs" },
    { name: "Abs", path: "/exercises/abs" },
  ];
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebarContainer" span={3}>
        {exercises.map((exercise) => (
          <div
            className={`sideItem ${pathname === exercise.path ? "active" : ""}`}
            onClick={() => {
              window.location.href = exercise.path;
            }}
          >
            <h3>{exercise.name}</h3>
          </div>
        ))}
      </div>
      <Col>{children}</Col>
    </div>
  );
};

export default SideBar;
