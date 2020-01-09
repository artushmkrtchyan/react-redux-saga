import React from 'react';
import {Form, Input, Tooltip, Icon, Button} from 'antd';
import styles from './register.module.css'

const Register = ({getFieldDecorator, handleSubmit, validateToNextPassword, compareToFirstPassword, handleConfirmBlur}) => {

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    return (
        <Form {...formItemLayout} onSubmit={handleSubmit} className={styles.registerForm}>
            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ],
                })(<Input/>)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: validateToNextPassword,
                        },
                    ],
                })(<Input.Password/>)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        {
                            validator: compareToFirstPassword,
                        },
                    ],
                })(<Input.Password onBlur={handleConfirmBlur}/>)}
            </Form.Item>
            <Form.Item
                label={
                    <span>
              Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
                }
            >
                {getFieldDecorator('nickname', {
                    rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                })(<Input/>)}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className={styles.registerFormButton}>
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Register;