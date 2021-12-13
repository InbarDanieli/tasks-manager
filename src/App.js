import './App.css';
import List from './components/list/List';
import TaskCreator from './components/taskcreator/TaskCreator';
import React, {useState} from 'react';

function App() {
const [taskarr, setTaskarr] = useState([]);

  return (
    <div className="App">
    <List tasks={taskarr}/>
    <TaskCreator fullitem={(task)=>{setTaskarr(taskarr.concat(task))}}/>
    </div>
  );
}

export default App;
