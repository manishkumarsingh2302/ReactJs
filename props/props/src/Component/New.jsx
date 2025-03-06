import { useState}from "react"
function Neww(){
    let [st,setSt]=useState(true)
    return(
        <>
    {st ? <h1> Wlccome </h1> : ""}
    <button onClick={()=>setSt(false)}>Hide </button>
    <button onClick={()=>setSt(true)}>Show</button>
    <button onClick={()=>setSt(false)}>toggel</button>
        </>
    )
}
export default Neww