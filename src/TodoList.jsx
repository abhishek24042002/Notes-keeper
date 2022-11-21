import React, { useState } from "react";
import "./TodoList.css";
import TodoLists from "./TodoLists";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const TodoList = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  // const deleteItem = (id) => {
  //   console.log("deleted");
  //   setItems((oldItems) => {
  //     return oldItems.filter((arrElem, index) => {
  //       return index !== id;
  //     });
  //   });
  // };

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={itemEvent}
          />
          <Button onClick={addItem} className='btno'>
              <AddIcon />
          </Button>


          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemVal, index) => {
              return (
                <TodoLists
                  text={itemVal} key={index}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default TodoList;
