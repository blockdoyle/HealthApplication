// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Input, Button, Select, Checkbox, message } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';  
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const { Option } = Select;

const SignupPage = () => {
    const [addUser] = useMutation(ADD_USER);

    const navigate = useNavigate();  
    const onFinish = async (values) => {
        try {
            const { data } = await addUser({
                variables: {
                    input: {
                        email: values.email,
                        password: values.password,
                        sex: values.sex,
                        height: parseFloat(values.height),
                        heightUnit: values.height.endsWith("in") ? "in" : "cm",
                        weight: parseFloat(values.weight),
                        weightUnit: values.weight.endsWith("lbs") ? "lbs" : "kg",
                        fitnessGoals: values.fitnessGoals
                    }
                }
            });
            console.log('Signup success:', data);
            message.success('Registration successful! Please log in.');
            navigate('/login');  // Redirect to login page after showing success message
        } catch (error) {
            console.error('Error signing up:', error);
            message.error('Failed to register: ' + error.message);
        }
    };

    return (
        <div className="signup-page" style={{ maxWidth: 300, margin: "auto" }}>
            <h1 style={{ textAlign: "center" }}>
                Signup to <span className="gradient-text"> Life Thrive</span>
            </h1>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email' }]} >
                    <Input style={{ backgroundColor: '#ececec', color: '#000000', boxShadow: '2px 2px 4px rgba(191, 188, 188, 0.6)', padding: '6px' }}/>
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input.Password style={{ backgroundColor: '#ececec', color: '#000000', boxShadow: '2px 2px 4px rgba(191, 188, 188, 0.6)', padding: '6px'}}/>
                </Form.Item>
                <h2 style={{ fontWeight: 'bold' }}>Personal Information:</h2>
                <Form.Item name="height" label="Height">
                    <div style={{ display: 'flex' }}>
                        <Input style={{ width: 'calc(100% - 80px)', marginRight: '8px', backgroundColor: '#ececec', color: '#000000', boxShadow: '2px 2px 4px rgba(191, 188, 188, 0.6)', padding: '6px' }} />
                        <Select defaultValue="" style={{ width: 70 }}>
                            <Option value="cm">cm</Option>
                            <Option value="in">in</Option>
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item name="weight" label="Weight">
                    <div style={{ display: 'flex' }}>
                        <Input style={{ width: 'calc(100% - 80px)', marginRight: '8px', backgroundColor: '#ececec', color: '#000000', boxShadow: '2px 2px 4px rgba(191, 188, 188, 0.6)', padding: '6px' }} />
                        <Select defaultValue="" style={{ width: 70 }}>
                            <Option value="kg">kg</Option>
                            <Option value="lbs">lbs</Option>
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item name="sex" label="Sex">
                    <Select style={{ backgroundColor: '#ececec', color: '#000000', boxShadow: '2px 2px 4px rgba(191, 188, 188, 0.6)' }}>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <h2 style={{ fontWeight: 'bold' }}>Fitness Goals:</h2>
                <Form.Item name="fitnessGoals">
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Checkbox value="muscleGain" style={{ lineHeight: '32px' }}>Muscle Gain</Checkbox><br />
                        <Checkbox value="weightLoss" style={{ lineHeight: '32px' }}>Weight Loss</Checkbox><br />
                        <Checkbox value="weightGain" style={{ lineHeight: '32px' }}>Weight Gain</Checkbox><br />
                        <Checkbox value="endurance" style={{ lineHeight: '32px' }}>Endurance</Checkbox><br />
                        <Checkbox value="overallHealth" style={{ lineHeight: '32px' }}>Overall Health</Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="primary" htmlType="submit" className="signup-form-button" style={{ width: '100%' }}>
                            Sign Up
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignupPage;
