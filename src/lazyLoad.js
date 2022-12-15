import {lazy} from 'react'

export  function lazyLoad(path,namedExport) {
  return lazy(()=>{
    console.log(path)
    let promise=import(`${path}`)
    
    if(namedExport==null){
        console.log('Here',path)
        //return import('./components/About.js')
        return promise
    }
    else{
        return promise.then((module)=>{return {default :module[namedExport] } })
    }
  })
  
}
