import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


function PostTodo() {
    const [title,setTitle]=useState("");
   
    const [dueDate,setDuedate]=useState("");
    function saveData(){ 
        let id="e98bec1b-19d0-4565-88ec-45dc79a41b35";
        let isDone=false;

        let data={title,isDone,dueDate,id}
        console.log(data);
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        };
        fetch('https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/todos/', requestOptions)
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
         <input type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
         <input type="date" name="duedate" value={dueDate} onChange={(e)=>{setDuedate(e.target.value)}}/>
        <button type="button" onClick={saveData}>add new user</button>   
        </div>
    )
}

export default PostTodo;
