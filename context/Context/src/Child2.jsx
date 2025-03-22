import React from "react"
import { appdate } from "./App"


  const Child2=()=>{

  return (
   <>
<h1>Child 2 here</h1>
<appdate.Consumer>
    {
    (data)=>{return <h1>{data}</h1>}
    }
</appdate.Consumer>
   </>
  )
}

export default Child2
