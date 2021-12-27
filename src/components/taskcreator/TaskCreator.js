import React, { useState } from 'react'
import "./TaskCreator.css"

function TaskCreator(props) {
  var today = new Date(),
    dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  const [chageDatebutton, setChageDatebutton] = useState("-")
  const [disable, setDisable] = useState(false)
  const [removedate, setRemovedate] = useState("block")
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("00:00:00")
  const [date, setDate] = useState(dateToday)

  function GetTask(e) {
    setTask(e.target.value)
  }
  function GetDescription(e) {
    setDescription(e.target.value)
  }
  function GetDate(e) {
    console.log(e);
    setDate(e.target.value)
  }
  function GetTime(e) {
    setTime(e.target.value)
  }

  function ChangeDate() {
    if (disable) {
      setRemovedate("block")
      setChageDatebutton("-")
      setDisable(!disable)
    }

    else
    {
      setRemovedate("none")
      setChageDatebutton("+")
      setDisable(!disable)
    }
  }

  function ReturnItem() {
    if (task && description && date && time !== "") {

      props.fullitem({ task, description, date: new Date(date + " " + time), removedate, })
      setDescription("")
      setTask("")
      setDate("")
      setTime("")
      props.onExit()
    }
    else {
      return alert("make sure you added all the information needed")
    }
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="closeButton" onClick={props.onExit}> <b> X </b> </button>
        <input className="TaskTitle" type="text" placeholder="write your task" onChange={GetTask} value={task}></input>
        <textarea className="TaskText" placeholder="description..." onChange={GetDescription} value={description}></textarea>
        <div>
          <input className="TaskDate" type="date" onChange={GetDate} value={date} disabled={disable}></input>
          <input className="TaskTime" type="time" onChange={GetTime} value={time} disabled={disable}></input>
          <button onClick={ChangeDate}> {chageDatebutton} </button>
        </div>
        <div className="changesButtons">
          <button className="saveButton" onClick={ReturnItem}>Save</button>
          <button className="cancelButton" onClick={props.onExit}> cancel </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCreator
