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
      task: "go to the movie",
      description: "this is a description 1",
      date: new Date(2018, 8, 5, 15, 30),

    },
    {
      task: "be with my love",
      description: "this is a description 2",
      date: new Date(2012, 2, 7, 15, 30),

    },
    {
      task: "play video games",
      description: "this is a description 3",
      date: new Date(2021, 11, 13, 15, 30),
    },
  ]

  const [taskarr, setTaskarr] = useState(getLSitems() || listitems);

  function setLSitems(items) {
    localStorage.setItem("items", JSON.stringify(items));
    setTaskarr(items);
  }

  function getLSitems() {
    let items = JSON.parse(localStorage.getItem("items"));
    
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
  
  return (
    <div className="App">
      <ButtonPopup fullitem={(task) => { setLSitems(taskarr.concat(task)) }} />
      <List tasks={taskarr} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
