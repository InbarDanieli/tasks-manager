import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { MdDeleteForever, MdAddCircleOutline, MdAddCircle } from "react-icons/md"
import { NewPageDescription } from '../../services/NewPageDescription'
import { GetTaskLists, SetPageName, SetTaskList } from '../../services/TaskService'
import "./ListOfPages.css"
import SideBar from '../SideBar/SideBar'


function ListOfPages(props) {
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)
  const [fullLinks, setFullLinks] = useState(Object.keys(GetTaskLists()))

  function keyHandler(e) {
    if (e.key === "Enter") {
      AddNewPage()
    }
  }

   function AddNewPage() {
    let bool = false
    fullLinks.map((link) => link === input && (bool = true))
    if (input !== "") {
      if (!bool) {
        SetTaskList(input, [{ ...NewPageDescription, task: `page ${input}` }])
        SetPageName(input)
        setFullLinks(fullLinks.concat(input))
        setInput("")
        navigate(`/${input}`)
      }
      else {
        window.alert("You can't add the same name to page");
        setInput("")
      }
    }
    else {
      window.alert("You can't add untitled page")
    }
  }

  function deletePage(page) {
    const updatePage = fullLinks.filter((pagename) => pagename !== page)
    setFullLinks(updatePage)
    SetTaskList(page, undefined)
    navigate(`/${updatePage[0] || "empty"}`)
  }

function change(){
  setOpen(!open)
}


  return (
    <div className='listOfPages-container'>
    <SideBar onclick={change} open = {open}>
      <div className='InputContainer'>
        <input
          onKeyPress={keyHandler}
          onChange={(e) => setInput(e.target.value)}
          placeholder='add page'
          type="text"
          value={input} />
        <button onClick={AddNewPage}><MdAddCircleOutline/></button>
      </div>
      {
        fullLinks.map((items, index) => {
          return (
            <div className='LinkContainer' key={index}>
              <Link className='LinkText' onClick={() =>{change(); SetPageName(items)}} to={`/${items}`}>{items}</Link>
              <button className='DeleteLink' onClick={() => deletePage(items)}>{<MdDeleteForever />}</button>
            </div>
          )
        })
      }
      </SideBar>
    </div>
  )
}

export default ListOfPages