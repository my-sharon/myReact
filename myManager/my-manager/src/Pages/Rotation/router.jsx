import React, {Component} from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
// 页面
import SowingList from './SowingList'
import SowingAdd from './SowingAdd'
import SowingEdit from './SowingEdit'
class SowingRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/sowing/list" component={SowingList}/>
                <Route path="/sowing/add" component={SowingAdd}/>
                <Route path="/sowing/edit" component={SowingEdit}/>
                {/* Redirect作用是路由重定向，也就是说在sowing路径下默认的页面是list那个页面  */}
                <Redirect exact form="/sowing" to="/sowing/list"/>
            </Switch>
        );
    }
}

export default SowingRouter;