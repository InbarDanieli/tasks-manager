import React, { useState } from 'react'
import "./TaskCreator.css"

function TaskCreator(props) {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  function GetTask(e) {
    setTask(e.target.value)
  }
  function GetDescription(e) {
    setDescription(e.target.value)
  }
  function GetDate(e) {
    setDate(e.target.value)
  }
  function GetTime(e) {
    setTime(e.target.value)
  }

  function ReturnItem() {
    if (task && description && date && time !== "") {
      
        props.fullitem({ task, description, date: new Date(date + " " + time), deleted: false })
        setDescription("")
        setTask("")
        setDate("")
        setTime("")
        props.onExit()
      }
      else
      {
        return alert("make sure you added all the information needed")
      }
    }
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={props.onExit}> X </button>
        <input type="text" placeholder="write your task" onChange={GetTask} value={task}></input>
        <input type="text" placeholder="description..." onChange={GetDescription} value={description}></input>
        <input type="date" onChange={GetDate} value={date}></input>
        <input type="time" onChange={GetTime} value={time}></input>
        <button onClick={ReturnItem}>Save</button>
      </div>
    </div>
  )
}

export default TaskCreator
