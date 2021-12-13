import React from 'react'

function List(props) {
  const listitems = [
    {
      task: "go to the movie",
      description: "this is a description 1",
      date: new Date(2018, 8, 5, 15, 30)
    },
    {
      task: "be with my love",
      description: "this is a description 2",
      date: new Date(2012, 2, 7, 15, 30)
    },
    {
      task: "play video games",
      description: "this is a description 3",
      date: new Date(2021, 11, 13, 15, 30)
    },
  ]

  const tasks = listitems.concat(props.tasks).map((item,index) => {
    return (
      <li key = {index}>
        <h2>{item.task}</h2>
        <hr />
        <p>{item.description}</p>
        {  Intl.DateTimeFormat('en-GB', {dateStyle: "medium", timeStyle: "short"}).format(item.date)}
      </li>)
  })

  return (
    <div>
      <ul>{tasks}</ul>
    </div>
  )
}

export default List



