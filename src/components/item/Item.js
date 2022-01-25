import React from "react"
import "./Item.css"
// import trashIcon from "../../Assets/trash-alt-regular.svg"

/**
 * 
 * @param {{item: {task: string, description:string, date: Date}, onDelete: (number)=>void}} props
 * @returns 
 */
function Item(props) {

  return (
      <li className="taskContainer">
        <h1 className="Title"><span>{props.item.task}</span></h1>
        <button className="CloseButton" onClick={props.onDelete}> <b> X </b> </button>
        <p className = "DateAndTime" style = {{display: props.item.removedate}}> {Intl.DateTimeFormat('en-GB', { dateStyle: "medium", timeStyle: "short" }).format(props.item.date)} </p>
        <div className="descriptionText">
          <p>{props.item.description}</p>

        </div>
      </li>
    )
}


export default Item
