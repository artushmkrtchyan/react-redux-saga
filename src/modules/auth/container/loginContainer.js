import React, {Component} from 'react'
import {Form} from 'antd';
import {Login} from '../components'

class LoginContainer extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        return <Login handleSubmit = {this.handleSubmit} getFieldDecorator={getFieldDecorator}/>
    }
}

export default Form.create()(LoginContainer);