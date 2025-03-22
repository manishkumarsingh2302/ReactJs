import React, { useContext } from 'react'
import { senddata } from './main'


const Context = () => {
    let acceptdata =useContext(senddata)
  return (
   <>
   <h1>Contact {acceptdata.name}</h1>
   {/* <senddata.Consumer>
    {
        (appdata)=><h1>{appdata}</h1>
    }
   </senddata.Consumer>
    */}
   </>
  )
}

export default Context
