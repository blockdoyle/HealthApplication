import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { message, Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
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
            localStorage.setItem('token', data.login.token); 
            message.success('Logged in successfully!');
            navigate('/'); 
        } catch (error) {
            console.error('Error during login:', error);
            message.error(error.message || 'Failed to log in.');
        }
    };

    return (
        <div style={{ maxWidth: 300, margin: "auto" }}>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
