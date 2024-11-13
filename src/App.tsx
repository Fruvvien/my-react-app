import React, {useState, useEffect, useRef} from "react";
import Greeting from "./Greeting";

function App(){
 /*  const [user, setUser] = useState({name:"", age: ""}); */
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTaks] = useState([]);
  const addTask = () => {
    if(newTasks.trim() === ""){
      return;
    } 
    setTasks((prevTasks)=> [...prevTasks, newTasks]);

    setNewTaks(""){

    }
  }
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
      <input type="text" name="" id="" />


     {/*  <h2>Felhasználói adatok</h2>
      Név: <input type="text" value={user.name} onChange={updateName} /><br />
      Age: <input type="text" value={user.age} onChange={updateAge} />
      <p>Név: {user.name}</p>
      <p>Age: {user.age}</p> */}

      
    </div>
  
  </>
  )

}



export default App