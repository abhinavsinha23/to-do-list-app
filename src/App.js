import './App.css';
import { useState, useRef } from 'react';


function App() {
  const [tasks, setTasks] = useState([{text: "Create new project", done: false}, {text: "Working call", done: false}, {text: "Meet with doctor", done: false}, {text: "Mow lawn", done: false}, {text: "Do laundry", done: false}]);
  const newTaskRef = useRef();

  const deleteTask = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1)
    setTasks(storedTasks)
  }

  const changeHandler = () => {
    let storedTasks = [...tasks];
    if (newTaskRef.current.value !== "") {
      storedTasks.push({text: newTaskRef.current.value, done: false})
      setTasks(storedTasks)
      newTaskRef.current.value = ""
    }
    else {
      alert("You haven't entered a new task!")
    }
  }

  const doneCheck = (index) => {
    let storedTasks = [...tasks];
    storedTasks[index].done = !storedTasks[index].done;
    setTasks(storedTasks)
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h1 className='title'>TO-DO LIST</h1>
      <div className='addTask'>
        <input type="text" placeholder='Enter new task' ref={newTaskRef}></input>
        <button className='addBtn' onClick={() => changeHandler()}><i className="fa fa-plus"/></button>
      </div>
      {tasks.map((task, index) => {
        return <Task key={index} taskInfo={task} removeFunc={() => deleteTask(index)} doneCheck={() => doneCheck(index)}/> 
      })}
    </div>
  );
}

const Task = (props) => {
return (
    <div className={props.taskInfo.done ? 'taskDone' : "task"}>
      <div className='taskInfo'>
        <p className={props.taskInfo.done ? 'done' : ""}>{props.taskInfo.text}</p>
      </div>
      <button className='doneBtn' onClick={props.doneCheck}><i className="fa fa-check"/></button>
      <button className='deleteBtn' onClick={props.removeFunc}><i className="fa fa-times"/></button>
    </div>
  )
  
}

export default App;
