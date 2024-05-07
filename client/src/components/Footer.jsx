import { 
    GithubOutlined, 
    LinkedinOutlined, 
    TwitterOutlined, 
    MailOutlined
} from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Life Thrive. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://github.com/blockdoyle/HealthApplication.git" className="social-icon">
                        <GithubOutlined />
                    </a>
                    <a href="https://www.linkedin.com/signup" className="social-icon">
                        <LinkedinOutlined />
                    </a>
                    <a href="https://twitter.com/i/flow/login" className="social-icon">
                        <TwitterOutlined />
                    </a>
                    <a href="mailto:youremail@example.com" className="social-icon">
                        <MailOutlined />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
