import './App.css';
import React from 'react';
import PostTodo from './PostTodo'

import JsonFetch from './jsonFetch';
function App() {
  //const some=JsonFetch().values;
  

  return (
    <>
   
    <div> <JsonFetch/></div>   

    <PostTodo/>
    
    
    
   </>
  );
}

export default App;
