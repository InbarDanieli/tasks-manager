import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ListOfPages from './components/list-of-pages/ListOfPages';
import LoginPage from './components/LoginPage/LoginPage';
import TasksPage from './components/tasks-page/TasksPage';

export const UserProvider = React.createContext("");

function App() {
const [userInput, setUerInput] = useState("")

const providerOptions = {
  data: userInput,
  changeData: (value)=> setUerInput(value)
}


  return (
    <Router>
      <UserProvider.Provider value={providerOptions}>
      <ListOfPages />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/:list' element={<TasksPage />} />
      </Routes>
      </UserProvider.Provider>
    </Router>
  )
}

export default App;
