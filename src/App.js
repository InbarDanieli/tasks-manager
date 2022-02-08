import './App.css';
import List from './components/list/List';
import React, { useState } from 'react';
import ButtonPopup from './components/popupButton/ButtonPopup';

function App() {
  const listitems = [
    {
      task: "Hello! 👋",
      description: "And welcome to your little task-manager! \n\n in this site you can add your tasks to organize your everyday life 😄",
      date: new Date(2018, 8, 5, 15, 30),
      bordercolor: "transparent"
    },
    {
      task: "How to use it? 🤔",
      description: "You can add your task by clicking on the \"Add Task\" button and adding your task info \n\n pro tip!😎\n you can disable the date by switching the date button to \"off\", like in this task, the date is diable👆",
      date: new Date(2012, 2, 7, 15, 30),
      removedate: "none",
      bordercolor: "transparent"
    },
    {
      task: "colors 🌈",
      description: "To make your tasks more organized by adding color tags \n 👈 like so",
      date: new Date(2021, 11, 13, 15, 30),
      removedate: "none",
      bordercolor: "blue",
    },
    {
      task: "Delete me! 👉",
      description: "First step: you can delete tasks by clicking on the trash icon\n\nBUT⚠️!\n You cannot bring a task back after you Delete it, so make sure you delete only the task you're done with",
      date: new Date(2021, 11, 13, 15, 30),
      bordercolor: "transparent",
    },
    {
      task: "Updates?😊",
      description: "What you see is only the beginning!\nYou can go to my GitHub page (link below👇) to read the updates\n\n Hope you like it!❤️",
      date: new Date(2021, 11, 13, 15, 30),
      bordercolor: "transparent",
    },
  ]

  const [taskarr, setTaskarr] = useState(getLSitems() || listitems)
  const [editMode, setEditMode] = useState(false)
  const [indexItem, setIndexItem] = useState()
  const [editItem, setEditItem] = useState("")


  function setLSitems(items) {
    localStorage.setItem("TaskItems", JSON.stringify(items));
    setTaskarr(items);
  }

  function getLSitems() {
    let items = JSON.parse(localStorage.getItem("TaskItems"));

    if (!items) {
      return
    }
    items = items.map((item) => {
      const date = item.date
      item.date = new Date(date);
      return item;
    });
    return items
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
      <div>
        <ButtonPopup
          onExit={() => {setEditItem("")}}
          itemValues={editItem}
          fullitem={(task) => { FullItemsHandler(task) }}
        />
      </div>
      <List
        tasks={taskarr}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />

      <div className='footer'>
        <span>created by inbar danieli </span>
        <a
          rel="noreferrer"
          href='https://github.com/InbarDanieli/tasks-manager'
          target="_blank">GitHub page
        </a>
        <button onClick={ResetApp}>reset</button>
      </div>
    </div>
  );
}

export default App;
