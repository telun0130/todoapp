import React, { useEffect, useState } from "react";
import Task from "./Task";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";

export default function TaskList() {
    const [filter, setfilter] = useState("todo");
    const tasks = useSelector(state=>state.tasks);

    const todo = () => {
        setfilter("todo")
    }
    const done = () => {
        setfilter("done");
    }
    const all = () => {
        setfilter("all");
    }
    const FilteredList = tasks.filter(task=>{
        if(filter==="todo") return (task.status === "todo");
        else if(filter==="done") return (task.status === "done");
        else return true;
    });
    useEffect(()=>{
        todo();
    },[]);
    return (
        <>
            <div className="d-flex justify-content-center my-3">
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" onClick={all}>全部</Button>
                    <Button variant="outlined" onClick={todo}>未完成</Button>
                    <Button variant="outlined" onClick={done}>已完成</Button>
                </Stack>
            </div>
            <div id="tasks" style={{width: "500px"}} className="mx-auto">
                {(FilteredList.length > 0)?
                    (FilteredList.map(task => (
                        <Task key={task.id} {...task} className="w-75"/>
                    ))
                ):(<div>目前沒有任務...</div>)}
            </div>
        </>
    );
}