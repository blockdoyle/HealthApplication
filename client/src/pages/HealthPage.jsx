import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_WEIGHT } from "../utils/mutations";
import { GET_USER_WEIGHT } from "../utils/queries";
import { useUserData } from "../context/userDataContext";
import {
  Row,
  Col,
  Space,
  Input,
  Button,
  Collapse,
  Card,
  Tooltip,
  InputNumber,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import "./HealthPage.css";

const historyData = []; // This is the array that will store the history of food items searched for by the user.

export default function HealthPage() {
  // STATES
  const [input, setInput] = useState(""); // This is the state that will store the user's input.

  const [data, setData] = useState([]); // This is the state that will store the data fetched from the API.

  const [currentWeight, setCurrentWeight] = useState(150); // This is the state that will store the user's current weight.

  const [goalWeight, setGoalWeight] = useState(140); // This is the state that will store the user's goal weight.

  const [dailyCalorieIntake, setDailyCalorieIntake] = useState(2500); // This is the state that will store the user's daily calorie intake.

  // Get the current logged in user
  const { userData } = useUserData();
  const currentUser = userData;

  // Mutations
  const [addWeight] = useMutation(ADD_WEIGHT); // This is the mutation that will add the user's weight to the database.

  // This function will handle the user's input for daily calorie intake.
  const handleCalorieIntakeChange = (e) => {
    setDailyCalorieIntake(e.target.value);
  };

  const [dailyCalorieExpenditure, setDailyCalorieExpenditure] = useState(2000); // This is the state that will store the user's daily calorie expenditure.

  // This function will handle the user's input for daily calorie expenditure.
  const handleCalorieExpenditureChange = (e) => {
    setDailyCalorieExpenditure(e.target.value);
  };

  const getTotalCalories = dailyCalorieIntake - dailyCalorieExpenditure; // This will calculate the total calories.

  // This function will handle the user's input.
  const handleInputChange = (e) => {
    console.log(input);
    setInput(e.target.value);
  };

  // This function will fetch the data from the API.
  const handleSearch = () => {
    const response = fetch(
      `https://api.calorieninjas.com/v1/nutrition?query=${input}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "j0Hq2gFfpven8IKukDhVUA==up1MPulZ53BOabJm", // Having troubles with the .env file, so I'm hardcoding the API key here.
        },
      },
      console.log(historyData)
    );

    response
      .then((res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json();
        } else {
          throw new Error("Response was not JSON");
        }
      })
      .then((data) => {
        console.log(data);
        console.log(data.items);
        setData(data.items); // This will set the data state to the data fetched from the API.
        historyData.push(
          ...data.items.filter(
            (item) =>
              !historyData.some(
                (existingItem) => existingItem.name === item.name
              )
          )
        );
        localStorage.setItem("historyData", JSON.stringify(historyData)); // This will store the historyData array in local storage.
      })
      .catch((error) => {
        console.error(error);
        console.log();
      });
  };

  // Tooltips
  // Tooltip for the calorie section.
  const tipCalorie = (
    <span>
      This is the number of calories you should consume in a day. This number is
      based on the recommendations set by the Government of Ontario's Ministry
      of Health.{" "}
      <a href="https://www.ontario.ca/page/calories-menus">Learn more</a>
    </span>
  );

  // Tooltip for the weight tracker.
  const tipWeight = (
    <span>
      This is where you can track your weight. <br />
      <br />
      <b>Note:</b> Currently only measured in pounds (lbs).
    </span>
  );

  // onSave function to save the user's weight to the database.
  const onSave = async () => {
    const { data } = await addWeight({
      variables: {
        userId: currentUser._id,
        weight: currentWeight,
        goalWeight: goalWeight,
      },
    });
    console.log(data);
  };

  // This is the array that will store the items for the Collapse component.
  const items = [
    {
      key: "1",
      label: "My Health",
      children: (
        <>
          <div id="calorie-save">
            <h1>Calories</h1>
            <Button type="primary">Save</Button>{" "}
            <Tooltip title={tipCalorie}>
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <div
            id="cal-numbers"
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <div id="cal-daily">
              <h3>Daily Calorie Intake:</h3>
              <Space.Compact
                style={{
                  width: "45%",
                }}
              >
                <Input
                  defaultValue={dailyCalorieIntake}
                  onChange={handleCalorieIntakeChange}
                  disabled
                  style={{ color: "black", textAlign: "center" }}
                />
              </Space.Compact>
            </div>
            <div id="daily-cal-expenditure">
              <h3>Daily Calorie Expenditure:</h3>
              <Space.Compact
                style={{
                  width: "45%",
                }}
              >
                <Input
                  defaultValue={dailyCalorieExpenditure}
                  onChange={handleCalorieExpenditureChange}
                  disabled
                  style={{ color: "black", textAlign: "center" }}
                />
              </Space.Compact>
            </div>
            <div id="total-calories">
              <h3>Total Calories:</h3>
              <Space.Compact
                style={{
                  width: "45%",
                }}
              >
                <Input
                  value={getTotalCalories}
                  disabled
                  style={{ color: "black", textAlign: "center" }}
                />
              </Space.Compact>
            </div>
          </div>
          <hr style={{ margin: "20px 0" }} />
          <div id="weight-save">
            <h1>Weight Tracker</h1>
            <Button type="primary" onClick={onSave}>
              Save
            </Button>{" "}
            <Tooltip title={tipWeight}>
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <div
            id="weight-tracker"
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <div id="current-weight">
              <h3>Current Weight:</h3>
              <InputNumber
                min={0}
                placeholder="Current Weight"
                style={{ width: "45%", textAlign: "center" }}
              />
            </div>
            <div id="goal-weight">
              <h3>Goal Weight:</h3>
              <InputNumber
                min={0}
                placeholder="Goal Weight"
                style={{ width: "45%", textAlign: "center" }}
              />
            </div>
            <div id="weight-loss">
              <h3>Net Weight Loss:</h3>
              <InputNumber
                min={0}
                placeholder="Weight Loss"
                style={{ width: "45%", textAlign: "center" }}
                disabled
              />
            </div>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "Food Log",
      children: (
        // This is the form that will allow the user to search for food items.
        <>
          <div className="search-bar">
            <Space.Compact style={{ width: "45%" }}>
              <Input
                placeholder={"Enter what you ate."}
                onChange={(e) => handleInputChange(e)}
              />
              <Button type="primary" onClick={handleSearch}>
                Submit
              </Button>
            </Space.Compact>
            <span style={{ fontStyle: "italic", marginBottom: "10px" }}>
              This food tracker is powered by{" "}
              <a href="https://calorieninjas.com/">CalorieNinjas</a>
            </span>
            <hr />
          </div>
          {/* This section displays the nutritional facts about what you ate. */}
          <ul>
            {data.map((item) => (
              <li key={item.name}>
                <b>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}:{" "}
                  <br />
                </b>
                <ul>
                  <li>Serving Size: Per {item.serving_size_g}g</li>
                  <li>Calories: {item.calories}</li>
                  <li>Carbs: {item.carbohydrates_total_g}g</li>
                  <li>Cholesterol: {item.cholesterol_mg}mg</li>
                  <li>Saturated Fat: {item.fat_saturated_g}g</li>
                  <li>Total Fat: {item.fat_total_g}g</li>
                  <li>Potassium: {item.potassium_mg}mg</li>
                  <li>Protein: {item.protein_g}g</li>
                  <li>Sodium: {item.sodium_mg}mg</li>
                  <li>Sugars: {item.sugar_g}g</li>
                </ul>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      key: "3",
      label: "History",
      children: (
        <>
          {/* Displays a history of all the food you entered into the search bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {localStorage.getItem("historyData") &&
              JSON.parse(localStorage.getItem("historyData")).map((item) => (
                <Card key={item.name} style={{ width: 300 }}>
                  <h3>
                    {...item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </h3>
                </Card>
              ))}
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div>
        <Row>
          <Col span={5} />
          <Col span={14} className="health-main">
            <div>
              {/* The collapse element separates the different health sections */}
              <Collapse
                items={items}
                size="large"
                defaultActiveKey={["1", "2"]}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
