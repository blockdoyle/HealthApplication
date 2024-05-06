// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Input, Button, Select, Checkbox, message } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';  
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const SignupPage = () => {
    const [addUser] = useMutation(ADD_USER);

    const navigate = useNavigate();  
    const onFinish = async (values) => {
        try {
            const input = {
                email: values.email,
                password: values.password,
                sex: values.sex || undefined, // Ensure undefined if empty
                height: values.height ? parseFloat(values.height) : undefined,
                heightUnit: values.height ? (values.height.endsWith("in") ? "in" : "cm") : undefined,
                weight: values.weight ? parseFloat(values.weight) : undefined,
                weightUnit: values.weight ? (values.weight.endsWith("lbs") ? "lbs" : "kg") : undefined,
                fitnessGoals: values.fitnessGoals || []
            };
    
            const { data } = await addUser({ variables: { input } });
            console.log('Signup success:', data);
            message.success('Registration successful! Please log in.');
            navigate('/login');  // Redirect to login page after showing success message
        } catch (error) {
            console.error('Error signing up:', error);
            message.error('Failed to register: ' + error.message);
        }
    };    

    return (
        <div style={{ maxWidth: 300, margin: "auto" }}>
            <h1 style={{ textAlign: "center" }}>Sign up to WebName</h1>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <h2 style={{ fontWeight: 'bold' }}>Personal Information:</h2>
                <Form.Item name="height" label="Height">
                    <Input addonAfter={<Select defaultValue="cm" style={{ width: 70 }}>
                        <Option value="cm">cm</Option>
                        <Option value="in">in</Option>
                    </Select>} />
                </Form.Item>
                <Form.Item name="weight" label="Weight">
                    <Input addonAfter={<Select defaultValue="kg" style={{ width: 70 }}>
                        <Option value="kg">kg</Option>
                        <Option value="lbs">lbs</Option>
                    </Select>} />
                </Form.Item>
                <Form.Item name="sex" label="Sex">
                    <Select>
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
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignupPage;
