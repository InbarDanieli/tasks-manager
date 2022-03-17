import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ListOfPages from './components/list-of-pages/ListOfPages';
import LoginPage from './components/LoginPage/LoginPage';
import TasksPage from './components/tasks-page/TasksPage';

console.log(localStorage);

function App() {
return(
<Router>
  <ListOfPages/>
  <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/:list' element={<TasksPage/>}/>
  </Routes>
</Router>
)
}

export default App;
