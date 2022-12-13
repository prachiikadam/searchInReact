import React, { useState } from 'react'
//import {Sum }from '../sum'
export default function Home() {
    const [isAdmin, setIsAdmin] = useState(false)
    return (
        <>
            <h1>Home</h1>
            <button onClick={
                ()=>{
                    import('../sum').then((module)=>{
                        alert(module.Sum(2,2))
                    })
                }
                //alert(Sum(2,2))
            }>
            Add 2+2</button>
            <br />
            <br />
            <button onClick={()=>setIsAdmin(prev=>!prev)}>Toggle Admin</button>
            {isAdmin?<p>Admin</p>:<h2>No Admin</h2>}
        </>

  )
}
