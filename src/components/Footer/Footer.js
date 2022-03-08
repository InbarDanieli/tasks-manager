import React from 'react'

function Footer(props) {
  return (
    <div className='footer'>
    <span>created by inbar danieli </span>
    <a
      rel="noreferrer"
      href='https://github.com/InbarDanieli/tasks-manager'
      target="_blank">GitHub page
    </a>
    <button onClick={props.onClick}>reset</button>
  </div>
  )
}

export default Footer