import React, {Component} from 'react'
import {Form} from 'antd';
import {Register} from '../components'

class RegisterContainer extends Component {

    state = {
        confirmDirty: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Register
                handleSubmit={this.handleSubmit}
                getFieldDecorator={getFieldDecorator}
                validateToNextPassword={this.validateToNextPassword}
                compareToFirstPassword={this.compareToFirstPassword}
                handleConfirmBlur={this.handleConfirmBlur}
            />
        )
    }
}

export default Form.create()(RegisterContainer);