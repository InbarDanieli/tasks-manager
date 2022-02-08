import React, { useEffect, useState } from "react"
import "./ButtonPopup.css"
import TaskCreator from "../taskcreator/TaskCreator"

function ButtonPopup(props) {
  const [usepopup, setUsepopup] = useState(false)
  const [className, setClassName] = useState("button")
  const [buttonText, setButtonText] = useState("Add Task")

  useEffect(() => {
    setUsepopup(!!props.itemValues)
  }, [props.itemValues])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 110) {
        setClassName("button small")
        setButtonText("+")
      } else {
        setClassName("button")
        setButtonText("Add Task")
      }
    });
    return window.removeEventListener("scroll", () => { })
  }, []);

  return (
    <div className="ButtonContainer">
      <button className={className} onClick={() => { setUsepopup(true) }}>{buttonText}</button>
      {usepopup &&
        <TaskCreator
          onExit={() => { props.onExit(); setUsepopup(false) }}
          fullitem={props.fullitem}
          itemValues={props.itemValues}
        />}
    </div>)
}

export default ButtonPopup
