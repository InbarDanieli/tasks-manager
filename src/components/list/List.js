import React from 'react'
import Item from '../item/Item'

function List(props) {
  const tasks = (props.tasks).map((item, index) => {
    return (
      <Item item = {item} key= {index} onDelete = {()=>{props.onDelete(index)}}/>
    )})

  return (
    <div>
      <ul>{tasks}</ul>
    </div>
  )
}

export default List



