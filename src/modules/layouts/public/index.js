import React from 'react';
import {Link} from "react-router-dom";
import {Layout, Menu} from 'antd';
const { Header, Footer } = Layout;

const PublicLayout = (props) => {
    return (
        <div className="container">
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/register">Register</Link></Menu.Item>
                    </Menu>
                </Header>
                {props.children}
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
};
export default PublicLayout