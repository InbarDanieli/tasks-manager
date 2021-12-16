import React, { useState } from "react"
import "./ButtonPopup.css"
import TaskCreator from "../taskcreator/TaskCreator"

function ButtonPopup(props) {
  const [usepopup, setUsepopup] = useState(false)

  return (
    <div>
      <button className = "button" onClick={() => { setUsepopup(true) }}>Add Task</button>
      {usepopup && <TaskCreator onExit={() => setUsepopup(false)} fullitem = {props.fullitem}/>}
    </div>)
}

export default ButtonPopup