import React from "react";
import {useInput} from "../utils/Hooks";
import { useDispatch } from "react-redux";
import { taskAdded } from "../utils/TaskSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function NewToDo({id, title="ToDoTitle", todo="Info", showed=false, onclose=f=>f}) {
  const dispatch = useDispatch();
  const [todoTitle, resetTitle] = useInput(title);
  const [todoInfo, resetInfo] = useInput(todo);


  const submit = function(event) {
    event.preventDefault();
    dispatch(taskAdded({title:todoTitle.value, todo:todoInfo.value}));
    resetTitle();
    resetInfo();
    onclose();
  };

  return (
    <>
      <Modal show={showed} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>新增待辦</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                className="form-control"
                required
                id="todotitle"
                label="待辦標題"
                defaultValue={todoTitle.value}
              />
              <p>title</p>
              <div className="br"></div>
              <TextField
                className="form-control"
                required
                id="todoinfo"
                label="待辦資訊"
                defaultValue={todoInfo.value}
              />
              <p>information</p>
            </div>
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onclose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
