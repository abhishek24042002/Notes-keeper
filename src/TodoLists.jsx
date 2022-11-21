import React, { useState } from "react";
import './TodoList.css';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const TodoLists = (props) => {

  const [line, setline] = useState(false);
  const cut =  () => {
    setline(true);
  };

  return (
    <>
      <div className="todo_style">
      <DeleteForeverRoundedIcon className='mat' onClick={cut}/>
        
        <li style={{ textDecoration: line ? "line-through" : 'none'}}>{props.text}</li>
      </div>
    </>
  );
};
export default TodoLists;
