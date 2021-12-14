import React from "react"

function Item(props)
{

  return(
    <li>
      <button style={{ float: 'right', marginRight: "50px" }} onClick = {props.onDelete}> X </button>
      <h2>{props.item.task}</h2>
      <hr />
      <p>{String(props.item.deleted)}</p>
      <p>{props.item.description}</p>
      {Intl.DateTimeFormat('en-GB', { dateStyle: "medium", timeStyle: "short" }).format(props.item.date)}
    </li>)
}


export default Item