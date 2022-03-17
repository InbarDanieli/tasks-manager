import React from 'react'
import { GetTaskLists } from '../../services/TaskService';
import ListOfPages from '../list-of-pages/ListOfPages';

function ErrorPage() {
  return (
    <div>
      {
        !Object.keys(GetTaskLists()).length
          ?
          <>
          <h1>Empty</h1>
          <p>we can see you dont have any page in your website</p>
          click <ListOfPages/> to add new page
          </>
          :
          <>
            <h1>OOPS 😳 !</h1>
            <p>this page does not exist</p>
            {/* return to the last page youve been */}
          </>
      }
    </div>
  )
}

export default ErrorPage