import {
    DEL_TODO_ITEM,
    CHANGE_TODO_ITEM,
    ADD_TODO_ITEM,
    REMOVE_FINISHED_TODO_ITEM,
    IS_CHECKED_ALL_TODO_ITEM,
    GET_ALL_ITEM
} from "./actionTypes";
// 默认的数据
const defaultState = {
    todos: [],
    finishedCount: 0
};
export default (state = defaultState,action) =>{
    console.log(state, action);
    //0.
    if(action.type ===  GET_ALL_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.todos = action.todos;
        return newState;
    }
    //1.删除一条记录
    if(action.type === DEL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        // 2.1 遍历
        let finishedCount = 0;
        newState.todos.forEach((todo, index) => {
            if (todo.id === action.todoId) {
                newState.todos.splice(index, 1);
            }
        });

        // 2.2 处理选中的
        newState.todos.forEach((todo, index) => {
            if (todo.finished) {
                finishedCount += 1;
            }
        });

        // 2.3 更新状态
        newState.finishedCound = finishedCount;
        return newState;
    }
    //2.修改一条记录的状态
    if(action.type === CHANGE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        // 1.1 遍历
        let finishedCount = 0;
        newState.todos.forEach((todo, index) => {
            if (todo.id === action.todoId) {
                todo.finished = action.isFinished;
            }
            if (todo.finished) {
                finishedCount += 1;
            }
        });

        // 2.3 更新状态
        newState.finishedCount = finishedCount;
        return newState;
    }
    //3.添加一条记录
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        //添加一条记录到数组中
        newState.todos.push(action.todo);
        //更新状态
        return newState;
    }
    //4.删除已经完成的所有任务
    if(action.type === REMOVE_FINISHED_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        let tempArr = [];
        newState.todos.map((todo,index)=>{
            if(todo.finished === false){
                tempArr.push(todo);
            }
        });
        newState.todos = tempArr;
        newState.finishedCount = 0;
        return newState;
    }
    //5.选中/取消所有
    if(action.type === IS_CHECKED_ALL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        let finishedCount = 0;
        // 5.1 遍历
        newState.todos.forEach((todo,index)=>{
            todo.finished = action.flag;
        });
        // 5.2 处理选中的
        newState.todos.forEach((todo, index) => {
            if (todo.finished) {
                finishedCount += 1;
            }
        });
        // 5.3 更新状态
        newState.finishedCount = finishedCount;
        return newState;
    }
    return state;
}