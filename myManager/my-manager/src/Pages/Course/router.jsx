import React, {Component} from 'react';
import { Route, Switch, Redirect} from "react-router-dom";

// 页面
import CourseList from './CourseList'
import CourseAdd from './CourseAdd'
import CourseTopic from './CourseTopic'
import CourseCategory from './CourseCategory'
import CourseAddOne from "./CourseAddOne";
import CourseAddTwo from "./CourseAddTwo";
import CourseAddThree from "./CourseAddThree";
import CourseCategoryAdd from './CourseCategoryAdd'

class CourseRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/course/list" component={CourseList}/>
                <Route path="/course/add" component={CourseAdd}/>
                <Route path="/course/topic" component={CourseTopic}/>
                <Route path="/course/category" component={CourseCategory}/>
                <Route path="/course/category_add" component={CourseCategoryAdd}/>
                <Route path="/course/add_one" component={CourseAddOne}/>
                <Route path="/course/add_two" component={CourseAddTwo}/>
                <Route path="/course/add_three" component={CourseAddThree}/>
                <Redirect exact form="/course" to="/course/list"/>
            </Switch>
        );
    }
}

export default CourseRouter;