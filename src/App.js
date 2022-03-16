import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PageList from './components/page-list/PageList';
import LoginPage from './components/LoginPage/LoginPage';
import TasksPage from './components/tasks-page/TasksPage';

function App() {
return(
<Router>
  <PageList/>
  <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/:list' element={<TasksPage/>}/>
  </Routes>
</Router>
)
}

export default App;
