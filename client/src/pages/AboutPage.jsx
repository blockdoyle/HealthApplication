import "./AboutPage.css";
import { Card, Avatar } from "antd";

export default function AboutPage() {
  // //   edit your position title here:
  // const brock = "";
  // const muniba = "";
  // const jianing = "";
  // const mohnish = "";

  return (
    <div className="about-main">
      <h1 className="heading-1">About Us</h1>
      <p>
        Starting in 2024, Health Application was created to help people track
        their health and fitness goals. We believe that everyone should have
        access to the tools they need to live a healthy life. Our app is free to
        use and easy to navigate. We hope you enjoy using it!
      </p>
      <br />
      <p>
        Our team is dedicated to providing the best user experience possible. We
        have a diverse group of talented individuals who are passionate about
        health and technology. Together, we work hard to continuously improve
        the app and add new features that will benefit our users. Thank you for
        choosing Health Application!
      </p>

      <h1 className="heading-1">Our Repository</h1>
      <p>
        Our repository is hosted on GitHub. You can view the code for our app
        and contribute to the project by visiting the following link:
      </p>
      <a href="https://github.com/blockdoyle/HealthApplication" className="repo-link">
        Health Application Repo
      </a>

      <h1 className="heading-1">Our Team</h1>
      <div className="about-cards">
        {/* <a href="https://github.com/blockdoyle" className="card-link">
          <Card title="Brock Lockhart-Doyle" style={{ width: 300 }}>
            <Avatar src="https://github.com/blockdoyle.png" size={64} />
            <Card.Meta title="Full Stack Developer" />
          </Card>
        </a> */}
        <div className="card-item">
          <a href="https://github.com/blockdoyle" className="card-link">
            <Card title="Brock Lockhart-Doyle" style={{ width: 300 }}>
              <Avatar src="https://github.com/blockdoyle.png" size={64} />
              <Card.Meta title="Full Stack Developer" />
            </Card>
          </a>
        </div>
        {/* <a href="https://github.com/MunibaP" className="card-link">
          <Card title="Muniba Perez" style={{ width: 300 }}>
            <Avatar src="https://github.com/MunibaP.png" size={64} />
            <Card.Meta title="Full Stack Developer" />
          </Card>
        </a> */}
        <div className="card-item">
          <a href="https://github.com/MunibaP" className="card-link">
            <Card title="Muniba Pervez" style={{ width: 300 }}>
              <Avatar src="https://github.com/MunibaP.png" size={64} />
              <Card.Meta title="Full Stack Developer" />
            </Card>
          </a>
        </div>
        {/* <a href="https://github.com/Joyce77777777" className="card-link" >
          <Card title="Jianing Zhou" style={{ width: 300 }}>
            <Avatar src="https://github.com/Joyce77777777.png" size={64} />
            <Card.Meta title="Full Stack Developer" />
          </Card>
        </a> */}
        <div className="card-item">
          <a href="https://github.com/Joyce77777777" className="card-link">
            <Card title="Jianing Zhou" style={{ width: 300 }}>
              <Avatar src="https://github.com/Joyce77777777.png" size={64} />
              <Card.Meta title="Full Stack Developer" />
            </Card>
          </a>
        </div>
        {/* <a href="https://github.com/MohnishBhujun" className="card-link">
          <Card title="Mohnish Bhujun" style={{ width: 300 }}>
            <Avatar src="https://github.com/MohnishBhujun.png" size={64} />
            <Card.Meta title="Full Stack Developer" />
          </Card>
        </a> */}
        <div className="card-item">
          <a href="https://github.com/MohnishBhujun" className="card-link">
            <Card title="Mohnish Bhujun" style={{ width: 300 }}>
              <Avatar src="https://github.com/MohnishBhujun.png" size={64} />
              <Card.Meta title="Full Stack Developer" />
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}
