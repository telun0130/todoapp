import React, {useState} from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ToDoForm from "./ToDoForm";
import { useDispatch } from "react-redux";
import { taskUpdated, taskDeleted } from "../utils/TaskSlice";

export default function Task({id, status= "stop",title="title", todo="沒事"}) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update = function(event) {
        event.preventDefault();
        dispatch(taskUpdated({id, status:"done"}));
    };

    const del = function(event) {
        event.preventDefault();
        dispatch(taskDeleted({id}));
    };
    return (
        <div style={{display:"flex", borderBottom:"1px solid black"}}>
            <div className="flex-grow-1" style={{paddingLeft: "10px"}}>{title}</div>
            <div>
                <DoneAllIcon onClick={update}/>
                <DeleteIcon onClick={del}/>
                <RemoveRedEyeIcon onClick={handleShow} />
            </div>
            <div>
                <ToDoForm title={title} todo={todo} showed={show} onclose={handleClose} />
            </div>
        </div>
    );
}