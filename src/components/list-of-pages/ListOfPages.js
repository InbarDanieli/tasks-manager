import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { MdDeleteForever, MdAddCircleOutline } from "react-icons/md"
import { NewPageDescription } from '../../services/NewPageDescription'
import { GetTaskLists, SetPageName, SetTaskList } from '../../services/TaskService'
import "./ListOfPages.css"
import SideBar from '../SideBar/SideBar'
import { UserProvider } from '../../App'


function ListOfPages(props) {
  const { data } = useContext(UserProvider)
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)
  const [fullLinks, setFullLinks] = useState(Object.keys(GetTaskLists()))
console.log(typeof data);

useEffect(()=>{
  !!data && AddNewPage(data)
}, [data])

  function keyHandler(e) {
    if (e.key === "Enter") {
      AddNewPage(input)
    }
  }

  function AddNewPage(input) {
    let bool = false
    fullLinks.map((link) => link === input && (bool = true))
    console.log(/[\\/]/g.test(input))

    if (input !== "" && !/[\\/\#&\{\}<\>*\?$\!'\":\@+\-|\=]/g.test(input)) {
      if (!bool) {
        SetTaskList(input, [{ ...NewPageDescription, task: `page ${input}` }])
        SetPageName(input)
        setFullLinks(fullLinks.concat(input))
        navigate(`/${input}`)
      }
      else {
        window.alert("You can't add the same name to page");
      }
      setInput("")
    }
    else {
      window.alert("invalid character!\none or more of your characters cant be added as page name\n(invalid: \\, / , # , & ,  , { , } , < , > , * , ? , $ , ! , ' , \" , : , @ , + , - , | , =)")
    }
  }

  function deletePage(page) {
    const updatePage = fullLinks.filter((pagename) => pagename !== page)
    setFullLinks(updatePage)
    SetTaskList(page, undefined)
    navigate(`/${updatePage[0] || "empty"}`)
    !updatePage[0] && change()
  }

  function change() {
    setOpen(!open)
  }


  return (
    <div className='listOfPages-container'>
      <SideBar onclick={change} open={open}>
        <div className='InputContainer'>
          <input
            onKeyPress={keyHandler}
            onChange={(e) => setInput(e.target.value)}
            placeholder='add page'
            type="text"
            value={input} />
          <button onClick={AddNewPage}><MdAddCircleOutline /></button>
        </div>
        {
          fullLinks.map((items, index) => {
            return (
              <div className='LinkContainer' key={index}>
                <Link className='LinkText' onClick={() => { change(); SetPageName(items) }} to={`/${items}`}>{items}</Link>
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