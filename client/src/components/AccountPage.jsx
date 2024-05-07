import React, { useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox, message } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';  
import { GET_ME } from '../utils/queries';  

const { Option } = Select;

const AccountManagementPage = () => {
    const [updateUser] = useMutation(UPDATE_USER);
    const { data, loading, error } = useQuery(GET_ME);
    const [form] = Form.useForm();

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                email: data.me.email || '',
                sex: data.me.sex || undefined,
                height: data.me.height ? `${data.me.height}${data.me.heightUnit}` : '',
                weight: data.me.weight ? `${data.me.weight}${data.me.weightUnit}` : '',
                fitnessGoals: data.me.fitnessGoals || [],
            });
        }
    }, [data, form]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const onFinish = async (values) => {
        const updatedValues = {};
        // Iterate over all form fields and add non-empty ones to updatedValues
        Object.keys(values).forEach(key => {
            if (values[key] !== undefined && values[key] !== "") {
                updatedValues[key] = values[key];
            }
        });
        // Special handling for height and weight to parse float and manage units
        if (updatedValues.height) {
            updatedValues.height = parseFloat(values.height);
            updatedValues.heightUnit = values.height.endsWith("in") ? "in" : "cm";
        }
        if (updatedValues.weight) {
            updatedValues.weight = parseFloat(values.weight);
            updatedValues.weightUnit = values.weight.endsWith("lbs") ? "lbs" : "kg";
        }
        try {
            await updateUser({ variables: { id: data.me.id, input: updatedValues } });
            message.success('Account updated successfully!');
        } catch (e) {
            console.error('Error updating account:', e);
            message.error('Failed to update account: ' + e.message);
        }
    };    

    return (
        <div style={{ maxWidth: 300, margin: "auto" }}>
            <h1 style={{ textAlign: "center" }}>Manage Your Account</h1>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item name="email" label="Email Address" rules={[{type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password">
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
                        Update Account
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AccountManagementPage;
