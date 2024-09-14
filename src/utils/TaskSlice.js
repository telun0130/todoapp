import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
  {id: "1001", status: "todo", title: "jogging", todo: "17:00 要外出慢跑"},
  {id: "1002", status: "todo", title: "react", todo: "週五前要複習已經教過的 React 概念"},
  {id: "1003", status: "todo", title: "mountain", todo: "要準備週六爬山的裝備"}
];

const taskSlice = createSlice({
  // key-value structure
  name:"tasks",
  initialState, // initialState: initialState
  reducers: {
    taskUpdated(state, action) {
      const {id, status} = action.payload;
      const targetTask = state.find(item=>item.id === id);
      if (targetTask) {
        targetTask.status = status;
      }
    },
    taskAdded(state, action) {
      const {title, todo} = action.payload;
      const newTask = {
        id: nanoid(),
        status: "todo",
        title: title,
        todo: todo
      }
      state.push(newTask);
    },
    taskDeleted(state, action) {
      const {id} = action.payload;
      return state.filter(item=>item.id !== id);
    }, 
    taskpersisted(state, action) {
      const {oldtask} = action.payload;
      if (oldtask && oldtask.length > 0) {
        return (oldtask);
      } else {
        return (initialState);
      }
    }
  }
});

export const {taskUpdated, taskAdded, taskDeleted, taskpersisted} = taskSlice.actions;
export default taskSlice.reducer;