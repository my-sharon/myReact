import React,{Component} from "react";
import {Route, Link} from "react-router-dom";
// import Info from "./User/Info";
// import Main from "./User/Main";
import routes from "./../routes";
export default class User extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        console.log(this.props.routes);
        // console.log(this.props.match.path);
        return(
            <div className="user">
                <div className="content">
                    <div className="left">
                        <Link to="/user/">主面板</Link>
                        <br/>
                        <Link to="/user/info">用户信息</Link>
                    </div>
                    <div className="right">
                        {
                            this.props.routes.map((route,key)=>{
                              return(
                                  <Route key={key} path={route.path} component={route.component}/>
                              )
                            })
                        }
                        {/*<Route exact path={routes.path} component={routes.component}/>*/}
                        {/*<Route path={routes.path} component={routes.component}/>*/}
                    </div>
                </div>
            </div>
        )
    }
}