import React, { useState } from 'react'

function TaskCreator(props) {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const[time, setTime] = useState("")
  const[date, setDate] = useState("")
  
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
    props.fullitem({ task, description, date:new Date(date + " " + time)})
    setDescription("")
    setTask("")
    setDate("")
    setTime("")
  }
  return (
    <div>
      <input type="text" placeholder="write your task" onChange={GetTask} value={task}></input>
      <input type="text" placeholder="description..." onChange={GetDescription} value={description}></input>
      <input type="date" onChange={GetDate} value = {date}></input>
      <input type="time" onChange={GetTime} value = {time}></input>
      <button onClick={ReturnItem}>Save</button>
    </div>
  )
}

export default TaskCreator
