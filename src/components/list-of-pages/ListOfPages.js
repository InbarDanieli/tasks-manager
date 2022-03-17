import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { NewPageDescription } from '../../services/NewPageDescription'
import { GetTaskLists, SetPageName, SetTaskList } from '../../services/TaskService'

function ListOfPages() {
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const [fullLinks, setFullLinks] = useState(Object.keys(GetTaskLists()))

  function keyHandler(e) {
    if (e.key === "Enter") {
      AddNewPage()
    }
  }

  function AddNewPage() {
    let bool = false
    fullLinks.map((link) => link === input && (bool = true))

    if (!bool) {
      SetTaskList(input, [{ ...NewPageDescription, task: `page ${input}` }])
      SetPageName(input)
      setFullLinks(fullLinks.concat(input))
      setInput("")
      navigate(`/${input}`)
      window.location.reload()
      // delete the reload!!!!
    }
    else {
      window.alert("You cant add the same name to page");
      setInput("")
    }
  }

  function deletePage(page) {
    const updatePage = fullLinks.filter((pagename) => pagename !== page)
    setFullLinks(updatePage)
    SetTaskList(page, undefined)
    navigate(`/${updatePage[0] || "empty"}`)
  }


  return (
    <div>
      <input
        onKeyPress={keyHandler}
        onChange={(e) => setInput(e.target.value)}
        placeholder='add page'
        type="text"
        value={input} />
      <button onClick={AddNewPage}>+</button>
      <br />
      {
        fullLinks.map((items, index) => {
          return (
            <div key={index}>
              <Link onClick={() => SetPageName(items)} to={`/${items}`}>{items}</Link>
              <button onClick={() => deletePage(items)}>X</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListOfPages