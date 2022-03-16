import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { SetTaskList, GetTaskList } from '../../services/TaskService'
import ButtonPopup from '../popupButton/ButtonPopup';
import Footer from '../Footer/Footer';
import List from '../list/List';
import ErrorPage from '../Error page/ErrorPage';


function TasksPage() {
  const { list: listname } = useParams()
  const [taskarr, setTaskarr] = useState(GetTaskList(listname))
  const [editMode, setEditMode] = useState(false)
  const [indexItem, setIndexItem] = useState()
  const [editItem, setEditItem] = useState("")

  useEffect(() => {
    setTaskarr(GetTaskList(listname))
  }, [listname])


  function setLSitems(items) {
    SetTaskList(listname, items)
    setTaskarr(items)
  }


  /**
   * 
   * @param {number} Delindex 
   */
  
  function deleteHandler(Delindex) {
    setLSitems(taskarr.filter((task, index) => index !== Delindex))
  }

  function ResetApp() {
    if (window.confirm("WARNING! \n this will delete all your changes")) {
      localStorage.clear();
      window.location.reload();
    }
    else { return }
  }


  function editHandler(index) {
    setEditItem(taskarr[index])
    setEditMode(true)
    setIndexItem(index)
  }

  function FullItemsHandler(task) {
    if (!editMode) {
      setLSitems(taskarr.concat(task))
    }
    else {
      taskarr[indexItem] = task
      setLSitems(taskarr)
    }
    setIndexItem()
    setEditMode(false)
  }

  return (
    <div className="App">
      {!!taskarr ?
        <>
          <div>
            <ButtonPopup
              onExit={() => { setEditItem("") }}
              itemValues={editItem}
              fullitem={(task) => { FullItemsHandler(task) }}
            />
          </div>
          <List
            tasks={taskarr}
            onDelete={deleteHandler}
            onEdit={editHandler}
          />

          <Footer onClick={ResetApp} />
        </>
        : <ErrorPage />
      }
    </div>
  )
}

export default TasksPage;
