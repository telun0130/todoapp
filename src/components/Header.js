import React, {useState} from "react";
import NewToDo from "./NewToDo";
import AddIcon from '@mui/icons-material/Add';

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
      <div className="bg-secondary d-flex justify-content-center text-center py-3">
        <div className="d-flex justify-content-between align-items-center" style={{width: "500px"}}>
          <div className="h1">ToDo</div>
          <div>
            <AddIcon fontSize="large" className="bg-danger text-white" onClick={handleShow}/>
            <NewToDo showed={show} onclose={handleClose}/>
          </div>
        </div>
      </div>
    </>
  );
}