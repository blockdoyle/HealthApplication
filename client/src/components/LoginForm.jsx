// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate('/dashboard');  // Redirect to a dashboard or home page after login
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form
                onFinish={onFinish}
                style={{ width: '300px' }}
            >
                <Title level={2} style={{ textAlign: 'center' }}>Log in to WebName</Title>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Login
                    </Button>
                </Form.Item>
                <Form.Item>
                    <a onClick={() => navigate('/signup')}>Don’t have an account? Sign Up</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;