import { useState } from "react";
import {
  Row,
  Col,
  Menu,
  Space,
  Input,
  Button,
  Collapse,
  Card,
  Statistic,
} from "antd";
import "./HealthPage.css";

const historyData = []; // This is the array that will store the history of food items searched for by the user.

export default function HealthPage() {
  const [input, setInput] = useState(""); // This is the state that will store the user's input.

  const [data, setData] = useState([]); // This is the state that will store the data fetched from the API.

  const [dailyCalorieIntake, setDailyCalorieIntake] = useState(2500); // This is the state that will store the user's daily calorie intake.

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

  const handleInputButton = (e) => {
    // Set the input to the value of the input field.
    setInput(e.target.value);
    // Log the input to the console.
    console.log(input);
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

  // This is the array that will store the items for the Collapse component.
  const items = [
    {
      key: "1",
      label: "My Health",
      children: (
        <>
          <div
            className="cal-inputs"
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
            }}
          >
            <div id="cal-daily">
              <h3>Daily Calorie Intake:</h3>
              <Space.Compact
                style={{
                  width: "65%",
                }}
              >
                <Input
                  placeholder="Default: 2500"
                  defaultValue={dailyCalorieIntake}
                  onChange={handleCalorieIntakeChange}
                />
              </Space.Compact>
            </div>
            <div id="daily-cal-expenditure">
              <h3>Daily Calorie Expenditure:</h3>
              <Space.Compact style={{ width: "65%" }}>
                <Input
                  placeholder="Default: 2000"
                  defaultValue={dailyCalorieExpenditure}
                  onChange={handleCalorieExpenditureChange}
                />
              </Space.Compact>
            </div>
            <div id="net-cal-balance">
              <h3>Net Calorie Balance:</h3>
              <Space.Compact style={{ width: "16%" }}>
                <Statistic value={getTotalCalories} />
              </Space.Compact>
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
