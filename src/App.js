import './App.css';
import List from './components/list/List';
import React, { useState } from 'react';
import ButtonPopup from './components/popupButton/ButtonPopup';
import { IntroDescription } from './IntroDescription';
import Footer from './Footer/Footer';

function App() {
  const listitems = IntroDescription

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
    </div>
  );
}

export default App;
