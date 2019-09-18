import React,{Component} from "react";
import Head from "./components/Head";
import List from "./components/List";
import Foot from "./components/Foot";
import store from "./store";
import {getTodoList} from "./api";
import {getAllItemAction} from "./store/actionCreators"


class App extends Component{
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

  // async _reqTodoList(){
  //     const result = await getTodoList();
  //     console.log(result);
  //     const action = getAllItemAction(result.items);
  //     if(result.success_code === 200){
  //         store.dispatch(action);
  //     }
  // }
  componentDidMount() {
      // this._reqTodoList();
      const action = getAllItemAction();
      store.dispatch(action);
  }

}


export default App;
