import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Moment from 'moment';

export const AddTask = ({onAdd}) => {
    const date =Moment().format('YYYY-MM-DD');

    const[title,setText]=useState('')
    const[dueDate,setDate]=useState(date.toString())
    const[isDone,setIsDone]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!title){
            alert('add task text');
            return;
        }
        
        const id=uuidv4();
        onAdd({todoId: id,id,title,dueDate,isDone})

        setText('');
        setDate(date.toString());
        setIsDone(false);

    }

    return (
        <form className="add-task" onSubmit={onSubmit}>
            <div className="add-task-text">Add new toodo</div>

            <div className="add-task-task">
                <label>Task:</label>
                <input type='text' placeholder='AddTask' value={title} onChange={(e)=>setText(e.target.value)} />

            </div>
            <div className="add-task-check">
                <label>IsDone:</label>
                <input type='checkbox' value={isDone} checked={isDone} onChange={(e)=>setIsDone(e.currentTarget.checked)} />

            </div>
            <div className="add-task-date">
                <label>Date:</label>
                <input type='date' placeholder='AddDate'  value={dueDate} onChange={(e)=>setDate(e.target.value)}/>

            </div>

           
            
            <input className="add-task-submit" type='submit' placeholder='Add'valur='save task' />
        </form>
    )
}
