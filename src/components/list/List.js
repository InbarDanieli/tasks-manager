import React from 'react'
import Item from '../item/Item'
import "./List.css"

function List(props) {
  const tasks = (props.tasks).map((item, index) => {
    return (
      <Item item = {item} key= {index} onEdit={()=>{props.onEdit(index)}} onDelete = {()=>{props.onDelete(index)}}/>
    )})

  return (
      <ul>{tasks}</ul>
  )
}

export default List

