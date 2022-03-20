import React from 'react'
import { GetTaskLists } from '../../services/TaskService';
import { useParams } from "react-router-dom"

function ErrorPage() {
  const { list } = useParams()

  return (
    <div>
      {
        !Object.keys(GetTaskLists()).length && list === "empty"
          ?
          <>
            <h1>Empty</h1>
            <p>we can see you dont have any page in your website</p>
            {/* think how to add new page easely */}
          </>
          :
          <>
            <h1>OOPS 😳 !</h1>
            <p>this page does not exist</p>
            {/* return to the last page youve been or to the empty page*/}
          </>
      }
    </div>
  )
}

export default ErrorPage