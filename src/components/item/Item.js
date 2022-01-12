import React from "react"
import "./Item.css"
// import trashIcon from "../../Assets/trash-alt-regular.svg"

function Item(props) {

  return (
    <div className="Item">
      <li className="List">
        <h1 className="Title"><span>{props.item.task}</span></h1>
        <button className="CloseButton" onClick={props.onDelete}> <b> X </b> </button>
        <p className = "DateAndTime" style = {{display: props.item.removedate}}> {Intl.DateTimeFormat('en-GB', { dateStyle: "medium", timeStyle: "short" }).format(props.item.date)} </p>
        <div className="BodyText">
          <p>{props.item.description}</p>

        </div>
      </li>
    </div>)
}


export default Item
