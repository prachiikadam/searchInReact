import './App.css';
import {useRef, useState} from 'react'

function App() {
  const inputRef=useRef();
  const [items,setItems]=useState([]);
  const [query,setQuery]=useState('');
  const filteredItems=items.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
  function submitHandler(e){
    e.preventDefault();
    const value=inputRef.current.value;
    if(value===""){
        return
    }
    setItems(prev=>{
      return[...prev,value]
    })
    inputRef.current.value=""
  }
  return (
    <>
    Search<input type="search" onChange={(e)=>{setQuery(e.target.value)}}/>
    <form onSubmit={submitHandler}>
    <input type="text" ref={inputRef} /> 
    <button type="submit">Add items</button>
    </form> 
    {
      filteredItems.map((item,index)=>{
        return <div key={index} >{item}</div>
      })
    }
    </>
   
  );
}

export default App;
