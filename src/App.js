import './App.css';
import {useRef, useState} from 'react'
import { Routes,Route, Link, Outlet } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
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
    <Routes>
    <Route path='/' element={<NavWrapper />}>
      <Route path='/' element={<Home />}/>
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />}/>
    </Route>
    </Routes>

    </>
   
  );
}

function NavWrapper(){
  return(
  <>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/store'>Store</Link>
    <Link to='/about'>About</Link>
  </nav>
  <Outlet/>
  </>
  )
}

export default App;
