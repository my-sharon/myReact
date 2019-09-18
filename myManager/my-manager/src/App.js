import React ,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";

import Login from "./Pages/Mine/Login";
import LayOut from './Components/LayOut/LayOut';

import SowingRouter from "./Pages/Rotation/router";
import CourseRouter from "./Pages/Course/router";
import MineRouter from './Pages/Mine/router'
import ErrorPage from './Pages/ErrorPage';

import * as constants from "./Store/actionTypes";

class App extends Component{
    componentWillMount() {
        this.props.reqLocalData();
    }

    render(){
      // 主面板
     let LayOutRouter = (
        <LayOut>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/mine" component={MineRouter}/>
                <Route path="/sowing" component={SowingRouter}/>
                <Route path="/course" component={CourseRouter}/>
                {/*只要路径不正确都会进到error页面，路径正确则显示对于页面*/}
                <Route component={ErrorPage}/>
            </Switch>
        </LayOut>
    );
    return (
        <Router>
           <Switch>
               <Route
                   exact
                   path="/"
                   render={
                       this.props.userData ?
                           (props)=> LayOutRouter :
                           ()=> <Redirect to="/login"  push/>
                   }
               />
               <Route path="/login" component={Login}/>
               <Route path="/" render={props => LayOutRouter}/>
           </Switch>
        </Router>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        reqLocalData(){
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            dispatch({
                type: constants.INIT_USER_DATA,
                userData
            });
        }
    }
};
const mapStateToProps = (state)=>{
    return {
        userData: state.userData
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
