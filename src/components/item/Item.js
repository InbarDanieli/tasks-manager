import React from "react"
import "./Item.css"
import trashIcon from "../../Assets/trash-alt-regular.svg"

function Item(props) {

  return (
    <div className="Item">
      <li className="List">
        <h1 className="Title"><span>{props.item.task}</span></h1>
        <p className = "DateAndTime"> {Intl.DateTimeFormat('en-GB', { dateStyle: "medium", timeStyle: "short" }).format(props.item.date)} </p>
        <div className="BodyText">
          <p>{props.item.description}</p>
        </div>
        <button className="TrashButton" onClick={props.onDelete}><img src={trashIcon} alt="Trash Button" width={"20px"}/></button>
      </li>
    </div>)
}


export default Item