import React from 'react';
import {Layout, Menu} from 'antd';
const { Header, Footer } = Layout;

const PrivateLayout = (props) => {
    return (
        <div className="container">
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">Nav 1</Menu.Item>
                        <Menu.Item key="2">Nav 2</Menu.Item>
                        <Menu.Item key="3">Logout</Menu.Item>
                    </Menu>
                </Header>
                {props.children}
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
};
export default PrivateLayout