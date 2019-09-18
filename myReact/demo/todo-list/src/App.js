import React,{Component} from "react";
import Head from "./components/Head";
import List from "./components/List";
import Foot from "./components/Foot";


class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        todos:[
          {id: 1, title: '打一小时王者', finished: false},
          {id: 2, title: '打两小时王者', finished: false},
          {id: 3, title: '打三小时王者', finished: false},
          {id: 4, title: '打四小时王者', finished: false},
        ],
        finishedCount: 0
      }
    }
    render(){
      const{todos,finishedCount} = this.state;
      return (
          <div className="todo-container">
            <div className="todo-wrap">
              {/*头部*/}
              <Head
                  //拿到最后一条数据的ID，因为创建新记录要在最后一条数据的ID上加1
                  lastTodoId={todos.length === 0 ? 0 : todos[todos.length-1].id}
                  addOneTodo={this.addOneTodo}
              />
              {/*列表*/}
              <List
                  todos={todos}
                  removeTodoWithId={this.removeTodoWithId}
                  changeTodoFinished={this.changeTodoFinished}
              />
              {/*尾部*/}
              <Foot
                  finishedCount={finishedCount}
                  totalCount={todos.length}
                  delCheckedTodo={this.delCheckedTodo}
                  dealSelectedAllTodo={this. dealSelectedAllTodo}
              />
            </div>
          </div>
      );
    }

    // 1. 修改完成状态
    changeTodoFinished = (todoId, isFinished) => {
      // 1.1 遍历
        const tempTodos = this.state.todos;
        let finishedCount = 0;
        tempTodos.forEach((todo, index) => {
            if (todo.id === todoId) {
              todo.finished = isFinished;
            }
            if (todo.finished) {
              finishedCount += 1;
            }
        });

        // 2.3 更新状态
        this.setState({
            todos: tempTodos,
            finishedCount
        })
    };
    // 2. 删除一条记录
    removeTodoWithId = (todoId) => {
      // 2.1 遍历
      const tempTodos = this.state.todos;
      let finishedCount = 0;
      tempTodos.forEach((todo, index) => {
          if (todo.id === todoId) {
            tempTodos.splice(index, 1);
          }
      });

      // 2.2 处理选中的
      tempTodos.forEach((todo, index) => {
          if (todo.finished) {
            finishedCount += 1;
          }
      });

      // 2.3 更新状态
      this.setState({
          todos: tempTodos,
          finishedCount
      })
    };
    // 3. 添加一个todo
    addOneTodo = (todo) =>{
        //3.1取出数组
       let tempTodos = this.state.todos;
       //3.2添加一条记录到数组中
       tempTodos.push(todo);
       //3.3更新状态
      this.setState({
          todos:tempTodos
      })
    };
    // 4. 删除已经完成的所有任务
    delCheckedTodo = () =>{
        let tempTodos = this.state.todos;
        let tempArr = [];
        tempTodos.map((todo,index)=>{
            if(todo.finished === false){
                tempArr.push(todo);
            }
        });
        this.setState({
            todos:tempArr,
            finishedCount: 0
        })
    };
    // 5. 选中/取消所有
    dealSelectedAllTodo = (flag)=>{
        const tempTodos = this.state.todos;
        let finishedCount = 0;
        // 5.1 遍历
        tempTodos.forEach((todo,index)=>{
            todo.finished = flag;
        });
        // 5.2 处理选中的
        tempTodos.forEach((todo, index) => {
            if (todo.finished) {
              finishedCount += 1;
            }
        });
        // 5.3 更新状态
        this.setState({
            todos: tempTodos,
            finishedCount
        })
    }
}


export default App;
