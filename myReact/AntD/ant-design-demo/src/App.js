import React, { Component } from 'react';
// import AntOne from "./components/AntOne"
import {Button, Menu, DatePicker, Dropdown, Icon} from "antd";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
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
function onChange(date, dateString) {
    console.log(date, dateString);
}

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<AntOne/>*/}
                {/*按需加载样式，极大提高性能，提高用户体验*/}
                <Button type="danger">百度一下</Button>
                <br/>
                <br/>
                <Button type="dashed">百度一下</Button>
                <br/>
                <br/>
                <Button type="dashed" icon="download" shape="circle" size="small"/>
                <div>
                    <DatePicker onChange={onChange} />
                    <br />
                    <MonthPicker onChange={onChange} placeholder="选择月份" />
                    <br />
                    <RangePicker onChange={onChange} />
                    <br />
                    <WeekPicker onChange={onChange} placeholder="选择日期" />
                </div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        );
    }

}

export default App;
