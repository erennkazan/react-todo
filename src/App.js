import './App.css';
import CreateTask from './CreateTask';
import Header from './Header';
import { useState } from 'react';

function App() {
 const [tasks, setTasks] = useState([]);
 const addTask =(newTask) =>{
     
     console.log(newTask);
  }
  return (
    <div className="App">
      <Header/>
      <CreateTask onAdd={addTask}/>
    </div>
  );
}

export default App;
