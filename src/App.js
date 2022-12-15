
import {useRef, useState} from 'react'
import { Routes,Route, Link, Outlet } from 'react-router-dom';
import React ,{Suspense}from 'react';
//import Home from './components/Home';
//import About from './components/About';
//import Store from './components/Store';

const Home=React.lazy(()=>import('./components/Home'))
const About=React.lazy(()=>import('./components/About'))
const Store=React.lazy(()=>import('./components/Store').then((module)=>{return {default :module.Store}}))

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
  <Suspense fallback={<h1>Loading......</h1>}>
  <Outlet/>
  </Suspense>
  </>
  )
}

export default App;
