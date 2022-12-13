import './App.css';
import {useRef, useState} from 'react'

function App() {
  const inputRef=useRef();
  const [items,setItems]=useState([])
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
    Search<input type="search"/>
    <form onSubmit={submitHandler}>
    <input type="text" ref={inputRef}/> 
    <button type="submit">Add items</button>
    </form> 
    {
      items.map((item,index)=>{
        return <div key={index} >{item}</div>
      })
    }
    </>
   
  );
}

export default App;
