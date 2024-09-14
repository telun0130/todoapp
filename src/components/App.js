import React from "react";
import TaskList from "./TaskList";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { taskpersisted } from "../utils/TaskSlice";
import { LocalstorageLoad, LocalstorageSave } from "../utils/LocalStorage";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(state=>state.tasks);
  window.addEventListener("beforeunload", async function () {
    await localStorage.setItem('isReload', true); //埋入標記
    LocalstorageSave(tasks);
  });

  window.addEventListener("load", function () {
    console.log("load");
    const isReloaded = localStorage.getItem("isReload");
    console.log(isReloaded);
    if (isReloaded) {
      console.log("reload trigger");
      localStorage.removeItem("isReloaded"); //清理標記
      const oldtasks = LocalstorageLoad();
      dispatch(taskpersisted({oldtask: oldtasks}));
    }
  });

  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}

export default App;
