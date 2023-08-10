import './App.css';
import Task from './Task';
import CreateTask from './CreateTask';
import Header from './Header';
import { useState } from 'react';
import Footer from './Footer';

function App() {
 const [tasks, setTasks] = useState([]);
 const addTask =(newTask) =>{
     
  setTasks((prevTask)=>{
    return [
        ...prevTask,
       newTask
    ]
});
  }
  const deleteTask = (id)=>{
    setTasks((prevTask)=>{
      return prevTask.filter((taskItem,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div className="App">
      <Header/>
      <CreateTask onAdd={addTask}/>
      <div className='container'>
      {tasks.map((taskItem,index)=>{
        return(
          <Task
          key={index}
          id={index}
          title={taskItem.title}
          content={taskItem.content}
          onDelete={deleteTask}
          />
        )
      })}
      </div>
     <Footer/>
    </div>
  );
}

export default App;
