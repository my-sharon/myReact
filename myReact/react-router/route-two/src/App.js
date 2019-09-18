import React, {Component} from 'react';
import './assets/index.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import routes from "./routes";
// import Home from "./components/Home";
// import Student from "./components/Student";
// import User from "./components/User";

// let routes = [
//     {path: "/", component: Home, exact: true},
//     {path: "/stu/", component: Student},
//     {path: "/user/", component: User},
// ];
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <header className="title">
              <Link to="/">首页</Link>
              <Link to="/stu/">学生中心</Link>
              <Link to="/user/">个人中心</Link>

              {
                routes.map((route,key)=>{
                    if(route.exact){
                      return (
                          <Route
                              key={key}
                              exact
                              path={route.path}
                              render={props=>(
                                 <route.component {...props} routes={route.routes}/>
                              )}
                          />)
                    }else{
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                render={props=>(
                                    <route.component {...props} routes={route.routes}/>
                                )}
                            />)
                     }
                })
              }
              {/*<Route exact path="/" component={Home}/>*/}
              {/*<Route path="/stu/" component={Student}/>*/}
              {/*<Route path="/user/" component={User}/>*/}
            </header>
          </div>
        </Router>
    );
  }
}

export default App;
