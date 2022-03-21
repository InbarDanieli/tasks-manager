import React, { useContext, useState } from 'react'
import "./ErrorPage.css"
import { GetPageName, GetTaskLists } from '../../services/TaskService';
import { useParams, useNavigate } from "react-router-dom"
import { UserProvider } from '../../App';
import {AiOutlineEnter} from "react-icons/ai"


function ErrorPage() {
  const [input, setInput] = useState("")
  const { changeData } = useContext(UserProvider)

  const navigate = useNavigate()
  const { list } = useParams()

  function returnToPage() {
    if (Object.keys(GetTaskLists()).length) {
      navigate(`/${GetPageName()}`)
    }
    else {
      navigate("/empty")
    }
  }

  function AddNewPage(e) {
    if (e.key === "Enter") {
      changeData(input)
      setInput("")
    }
  }

  return (
    <div className='ErrorContainer'>
      {
        !Object.keys(GetTaskLists()).length && list === "empty"
          ?
          <>
            <h1 className='ErrorTitle'>Empty 😶</h1>
            <p className='ErrorText'>we can see you dont have any page in your website</p>
            write
            <input
              value={input}
              onKeyDown={(e) => AddNewPage(e)}
              onChange={(e) => setInput(e.target.value)}
              placeholder='here'
              className='ErrorInput' />
            to add new page
            <br />
            <div className='EnterrTextContainer'>(click on the "Enter" <button className='EnterKeyButton'><AiOutlineEnter className='EnterIcon'/></button> key to add your page)</div>
            </>
            :
            <>
              <h1 className='ErrorTitle'>OOPS 😳 !</h1>
              <p className='ErrorText'>this page does not exist</p>
              <button className='returnButton' onClick={returnToPage}>return</button> to the last page
            </>
      }
          </div>
  )
}

      export default ErrorPage