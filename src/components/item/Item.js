import React from "react"
import "./Item.css"

function Item(props)
{

  return(
    <div className = "Item">
    <li className = "List">
    <h1 className = "Title"><span>{props.item.task}</span></h1>
      <button className = "CloseButton"  onClick = {props.onDelete}> <b> X </b> </button>
      <div className = "BodyText">
      <p>{props.item.description}</p>
      </div>
      {Intl.DateTimeFormat('en-GB', { dateStyle: "medium", timeStyle: "short" }).format(props.item.date)}
    </li>
    </div>)
}


export default Item