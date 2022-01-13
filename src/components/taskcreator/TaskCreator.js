import React, { useState } from 'react'
import "./TaskCreator.css"

function TaskCreator(props) {
  const today = new Date(),
    dateToday = today.toISOString().split('T')[0]


  const [disable, setDisable] = useState(false)
  const [removedate, setRemovedate] = useState("block")
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("00:00:00")
  const [date, setDate] = useState(dateToday)
  const [tooltip, settooltip] = useState(false)

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
      setDisable(!disable)
    }

    else {
      setRemovedate("none")
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
      setTimeout(() => {
        settooltip(false)
      }, 2000);
      settooltip(true)
    }
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="closeButton" onClick={props.onExit}> <b> X </b> </button>
        <input className="TaskTitle" type="text" placeholder="write your task" maxLength={18} onChange={GetTask} value={task}></input>
        <textarea className="TaskText" placeholder="description..." onChange={GetDescription} value={description}></textarea>
        <div className='dateContainer'>
          <span>
            <input className="TaskDate" type="date" onChange={GetDate} value={date} disabled={disable}></input>
            <input className="TaskTime" type="time" onChange={GetTime} value={time} disabled={disable}></input>
          </span>
          <label className="switch">
            <input type="checkbox" id="OnOffButt" defaultChecked={!disable} onClick={ChangeDate} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="changesButtons">
          <button className="saveButton" onClick={ReturnItem}>Save {tooltip && <span className="required">please fill required fields</span>}</button>
          <button className="cancelButton" onClick={props.onExit}> cancel </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCreator
