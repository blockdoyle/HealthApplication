import { Row, Col, Menu, Space, Input, Button } from "antd";
import "./HealthPage.css";
export default function HealthPage() {
  const items = [
    {
      key: "1",
      label: "Food Log",
    },
    {
      key: "2",
      label: "History",
    },
  ];
  return (
    <>
      <div>
        <Row>
          <Col span={4}>
            <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
          </Col>
          <Col span={1} />
          <Col span={18} className="health-main">
            <div className="search-bar">
              <Space.Compact style={{ width: "45%" }}>
                <Input placeholder={"Enter what you ate."} />
                <Button type="primary">Submit</Button>
              </Space.Compact>
              <span style={{ fontStyle: "italic", marginBottom: "10px" }}>
                This food tracker is powered by{" "}
                <a href="https://calorieninjas.com/">CalorieNinjas</a>
              </span>
              <hr />
            </div>
            <p>
              Aliqua culpa occaecat do sit aliqua fugiat occaecat veniam culpa
              amet magna elit. Minim magna incididunt enim magna exercitation
              esse. Eiusmod ut enim incididunt pariatur. Ad ad amet esse eiusmod
              in laborum qui Lorem do nulla cillum ut. Deserunt occaecat dolor
              non reprehenderit aliqua sunt ipsum irure et. Tempor labore est
              ipsum et laborum. Aute fugiat elit sunt consectetur non duis
              tempor ipsum ad.
            </p>
            <br />
            <p>
              Officia proident irure ut ea cillum et nulla est culpa est. Anim
              est aliqua ad laborum. Ea nisi nostrud officia enim. Minim
              occaecat exercitation laborum ullamco occaecat tempor velit eu
              laborum enim laboris minim velit pariatur.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
