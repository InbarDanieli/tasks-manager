import React, { useState } from 'react'
import ToDoList from '../components/To-Do-List/ToDoList';

function ToDoListCreator() {
  const [inputText, setInputText] = useState("")
  const [toDoList, setToDoList] = useState([])

  function SetInputText(e) {
    setInputText(e.target.value);
  }

  function AddItem() {
    setToDoList(toDoList.concat(inputText))
    setInputText("")
  }

  function ClickHandler() {
    AddItem()
  }

  function keyPressHandler(e) {
    if (e.key === "Enter") {
      AddItem()
    }
  }



  return (
    <div>
      <input onKeyPress={keyPressHandler} onChange={SetInputText} value={inputText} placeholder='task...'></input>
      <button onClick={ClickHandler}>+</button>
      <div>
        {toDoList.map((toDoItem) => <ToDoList text={toDoItem} />)}
      </div>

    </div>
  )
}

export default ToDoListCreator