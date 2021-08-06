import React,{useState,useEffect} from 'react'

function JsonFetch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  const [filter,filterSet]=useState("");
  const TodoRow=({todo})=>(
    <li  >
      {todo.title} 
    </li>
 )

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/todos/")
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <input 
        value={filter}
        placeholder="search"
        onChange={(evt)=>filterSet(evt.target.value)}
      />


      <ul>
        {items
          .filter((item)=>item.title.toLowerCase().includes(filter.toLowerCase()))
          .map(item => (
            
            <TodoRow todo={item} key={item.id} />
              
            ))}
      </ul>
      </>
    );
  }
}
export default JsonFetch;