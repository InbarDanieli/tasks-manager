import './App.css';
import List from './components/list/List';
import TaskCreator from './components/taskcreator/TaskCreator';
import React, { useState } from 'react';

function App() {
  const listitems = [
    {
      task: "go to the movie",
      description: "this is a description 1",
      date: new Date(2018, 8, 5, 15, 30),
      deleted: true
    },
    {
      task: "be with my love",
      description: "this is a description 2",
      date: new Date(2012, 2, 7, 15, 30),
      deleted: false
    },
    {
      task: "play video games",
      description: "this is a description 3",
      date: new Date(2021, 11, 13, 15, 30),
      deleted: false
    },
  ]

  const [taskarr, setTaskarr] = useState(listitems);

  function deleteHandler(Delindex) {
    setTaskarr(taskarr.filter((task, index) => index !== Delindex))
  }

  return (
    <div className="App">
      <List tasks={taskarr} onDelete={deleteHandler} />
      <TaskCreator fullitem={(task) => { setTaskarr(taskarr.concat(task)) }} />
    </div>
  );
}

export default App;
