import React,{Component} from "react";
import Head from "./Head";
import List from "./List";
import Foot from "./Foot";
import {getAllItemAction} from "./../store/actionCreators";
import {connect} from "react-redux";



class Todo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        // const{todos,finishedCount} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/*头部*/}
                    <Head/>
                    {/*列表*/}
                    <List/>
                    {/*尾部*/}
                    <Foot/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.reqTodoList();

    }

}

const mapDispatchToProps = (dispatch)=>{ //只要集成了react-redux，这个方法会自动给我们传递一个dispatch
      return {//这里面实现的方法在所以组件内都可以通过this.props.reqTodoList()等方法去获取
          reqTodoList(){
              const action = getAllItemAction();
              dispatch(action);
          }
      }
};
/*connect()()方法:
第一个()接受两个参数
1.state
2.action  >> mapDispatchToProps 把action保存到props的属性中
第二个()放组件
 */
export default connect(null,mapDispatchToProps)(Todo);
