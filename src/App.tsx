import React, {useState, useEffect, useRef, SetStateAction} from "react";
import Greeting from "./Greeting";

type Task = {name: string, completed: boolean}


function App(){
 /*  const [user, setUser] = useState({name:"", age: ""}); */
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTakName] = useState('');
  const addTask = () => {
    if(newTaskName.trim() === ''){return } 
    const newTask: Task = {name: newTaskName, completed: false};


    setTasks((prevTasks : any)=> [...prevTasks, newTaskName]);
    setNewTakName('');
  }

  const removeTask = (indexToRemove : number) =>{
    setTasks((prevTasks)=> prevTasks.filter((task, index) => index !== indexToRemove));
  };


  const toggleTaskCompletion = (index: number) =>{
    setTasks((prevTasks) => prevTasks.map((task, i) => i === index ? {...task, completed: !task.completed}: task)
  )}


  /* const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUser((prevUser)=> ({...prevUser, name: e.target.value }) )
  }
  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUser((prevUser)=> ({...prevUser, age: e.target.value }) )
  } */


  return (
  <>
    <div>
      <h2>Feldadatlista</h2>
      <input type="text" value={newTaskName} onChange={(e) =>{ setNewTakName(e.target.value)}} name="" id="" />
      <button onClick={addTask}>Hozzáadás</button>
      <ul>
        
          {tasks.map((task,index) =>(
            <li key={index}>
              <span style={{textDecoration: task.completed? "line-through": "none"}}>
              {task.name}
              </span>
              <button onClick={() => toggleTaskCompletion(index)}>
                {task.completed ? "Visszaállítás": "Kész"}
              </button>
              <button onClick={() => removeTask(index)}></button>
            </li>

          )) }
      </ul>
    </div>
    
  </>
  )

}



export default App