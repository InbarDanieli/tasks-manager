import React, { useState } from 'react'
import "./ToDoList.css"
import { GiCheckMark } from "react-icons/gi"

function ToDoList(props) {
  const [checked, setChecked] = useState(false)

  function clickHandler() {
    setChecked(!checked)
  }


  return (
    <div className='toDoWrapper'>
      <span onClick={clickHandler} className='checkBoxContainer'>
        <span className='check'>{checked && <GiCheckMark />}</span>
        <input className='checkbox' type={"checkbox"} />
      </span>
      <div>
        <span style={{ textDecoration: checked && "line-through" }} className='itemText'>{props.text}</span>
      </div>
    </div>
  )
}

export default ToDoList