// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useUserData } from '../context/userDataContext';
import { Form, Input, Button, Select, Checkbox } from 'antd';

const { Option } = Select;

const SignupPage = () => {
    const { updateUser } = useUserData();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        updateUser({

        });
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
