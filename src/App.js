import './App.css';
import List from './components/list/List';
import React, { useState } from 'react';
import ButtonPopup from './components/popupButton/ButtonPopup';

function App() {
  /**
   * 
   */
  const listitems = [
    {
      task: "Hello! 👋",
      description: "and welcome to your little task-maneger! \n\n in this site you can add your own tasks to orginaze your everyday life 😄",
      date: new Date(2018, 8, 5, 15, 30),

    },
    {
      task: "How to use it? 🤔",
      description: "you can add your task by clicking on the \"Add Task\" button, and add your task info \n\n pro tip!😎\n you can disable the date by switching the date button to \"off\", like in this task, the date is diable👆",
      date: new Date(2012, 2, 7, 15, 30),
      removedate: "none"

    },
    {
      task: "Close me! 👉",
      description: "First step: to delete tasks just close them with the \"X\" button\n\nBUT⚠️!\n you cannot bring task back after closing it, so make sure you closed only the task you're done with",
      date: new Date(2021, 11, 13, 15, 30),
    },
    {
      task: "updates?😊",
      description: "what you see its only the begining!\nyou can go to my GitHub page (link below👇) to read the updates\n\n Hope you like it!❤️",
      date: new Date(2021, 11, 13, 15, 30),
    },
  ]

  const [taskarr, setTaskarr] = useState(getLSitems() || listitems);

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

  function ResetApp(){
    if(window.confirm("WARNING! \n this will delete all your changes"))
    {
    localStorage.clear();
    window.location.reload();
    }
    else {return}
  }

  return (
    <div className="App">
      <div>
      <ButtonPopup fullitem={(task) => {setLSitems(taskarr.concat(task)) }} />
      </div>
      <List tasks={taskarr} onDelete={deleteHandler} />

      <div className='footer'>
      <span>created by inbar danieli </span>
      <a rel="noreferrer"href='https://github.com/InbarDanieli/tasks-manager' target="_blank">git hub page</a>
      <button onClick={ResetApp}>reset</button>
      </div>

    </div>
  );
}

export default App;
