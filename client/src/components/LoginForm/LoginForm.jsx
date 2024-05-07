// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../LoginForm/LoginForm.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import AuthService from '../../utils/auth'


const { Title } = Typography;

const LoginForm = () => {
    const [login] = useMutation(LOGIN_USER);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const { data } = await login({
                variables: {
                    email: values.email,
                    password: values.password,
                }
            });
            console.log('Login success:', data);
            AuthService.login(data.login.token); 
            message.success('Logged in successfully!');
            navigate('/'); 
        } catch (error) {
            console.error('Error during login:', error);
            message.error(error.message || 'Failed to log in.');
        }
    }

    return (
        <div className="login-form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <Form
                onFinish={onFinish}
                style={{ width: '350px', }}
                labelAlign="top" 
            >
                <Title level={2} className="loginTitle">Login to <span className="gradient-text">Life Thrive</span></Title>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input placeholder="Email Address" className="loginInput" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" className="loginInput" />
                </Form.Item>
                <Form.Item className="login-button-container">
                    <Button className= "login-form-button" type="primary" htmlType="submit" block>
                        LOGIN
                    </Button>
                </Form.Item>
                <Form.Item>
                    <a  className= "login-form-link" onClick={() => navigate('/signup')}>Don’t have an account? Sign Up</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
