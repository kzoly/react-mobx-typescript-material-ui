import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


function PostTodo() {
  
  const [title,setTitle]=useState("");
  
  const [dueDate,setDuedate]=useState("");
  function saveData(){ 
    let id=uuidv4();
    
    let isDone=false;
      
    let data={todoId: id,id,title,isDone,dueDate}
      console.log(data);
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
          method: 'POST',
          headers: { 'Accept': 'application/json',
          'Content-Type': 'application/json',},
          body: JSON.stringify(data)
      };
      fetch('https://610e4a9848beae001747baa4.mockapi.io/myapptodo2', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
        

  }
    return (
        <div>
         <input className="textInput" type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
         <input className="dateInput" type="date" name="duedate" value={dueDate} onChange={(e)=>{setDuedate(e.target.value)}}/>
        <button type="button" onClick={saveData}>Add</button>   
        </div>
    )
}

export default PostTodo;
