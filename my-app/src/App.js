import './App.css';
import React,{useState,useEffect} from 'react'
import PostTodo from './store/PostTodo'
import TodoRow from './component/rowAdd';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  const [filter,filterSet]=useState("");

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://610e4a9848beae001747baa4.mockapi.io/myapptodo2")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  //delete item task
  const deleteItem = (id) =>{
    setItems(items.filter((item)=>item.id!==id))
  }

  //  toggle reminder
  const toggleReminder=(id) => {
    setItems(items.map((item) => item.id===id ? { ...item,isDone:!item.isDone } : item))
  }


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
     <>
      <div className="tablebody">
        <input 
            className="searchBar"
            value={filter}
            placeholder="search"
            onChange={(evt)=>filterSet(evt.target.value)}
          />
        <ul>
            {items
              .filter((item)=>item.title.toLowerCase().includes(filter.toLowerCase()))
              .map(item => (
                
                <TodoRow todo={item} key={item.id} onDelete={deleteItem} onToggle={toggleReminder} />
                  
                ))}
        </ul> 
        {items.length>0?(''):('No item to show')}

        

      </div>    
        
       <div className="newTodo">  
          <label>Add new toodo</label>
        
          <div>    <PostTodo/>      </div>
        
        </div> 
      </>
    );
  }

}

export default App;
