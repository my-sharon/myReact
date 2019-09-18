import React from 'react';
import {version,Button,Icon,Layout,Menu,Dropdown,Pagination,BackTop} from "antd";
import "antd/dist/antd.css";
const { Header, Footer, Sider, Content } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);
function AntOne() {
    return (
        <div>
            <p>Ant Design 的版本是{version}</p>
            <Button type="primary">我是按钮</Button>
            <br/>
            <br/>
            <Button type="dashed">我是按钮</Button>
            <br/>
            <br/>
            <Button type="danger" icon="download" shape="circle" loading="false"></Button>
            <br/>
            <br/>
            <Button.Group size="large">
                <Button type="primary">
                    <Icon type="left" />
                    Backward
                </Button>
                <Button type="primary">
                    Forward
                    <Icon type="right" />
                </Button>
            </Button.Group>
            <br/>
            <br/>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
            <br/>
            <br/>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <br/>
            <br/>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>
            <br/>
            <br/>
            <Pagination defaultCurrent={1} total={50} />
            <br/>
            <br/>
            <BackTop />
            Scroll down to see the bottom-right
            <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
            button.
            <br/>
            <br/>
        </div>
    );
}

export default AntOne;
