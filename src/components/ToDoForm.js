import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function ToDoForm({title="ToDoTitle", todo="Info", showed=false, onclose=f=>f}) {

  return (
    <>
      <Modal show={showed} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
                disabled
                className="form-control"
                id="todotitle"
                label="待辦標題"
                defaultValue={title}
              />
              <p>title</p>
              <div className="br"></div>
              <TextField
                disabled
                className="form-control"
                id="todoinfo"
                label="待辦資訊"
                defaultValue={todo}
              />
              <p>information</p>
            </div>
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onclose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
