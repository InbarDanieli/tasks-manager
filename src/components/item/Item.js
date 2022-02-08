import React from "react"
import "./Item.css"
import { FaTrashAlt } from "react-icons/fa"
import {AiOutlineEdit} from "react-icons/ai"

/**
 * 
 * @param {{item: {task: string, description:string, date: Date}, onDelete: (number)=>void}} props
 * @returns 
 */
function Item(props) {

  return (
    <li className="taskContainer">
      <h1 className="Title"><span>{props.item.task}</span></h1>
      <button className="DeleteButton" onClick={props.onDelete}><FaTrashAlt/></button> 
      <button className="EditButton" onClick={props.onEdit}><AiOutlineEdit/></button>
      <div className="descriptionText"><p>{props.item.description}</p></div>
      <p className="DateAndTime" style={{display: props.item.removedate}}>{Intl.DateTimeFormat('en-GB', { dateStyle: "medium", timeStyle: "short" }).format(props.item.date)}</p>
      <div className="colorTag" style={{backgroundColor: `${props.item.bordercolor !== "transparent" ? `var(--${props.item.bordercolor}color)` : "transparent"}` }}></div>
    </li>
  )
}


export default Item
