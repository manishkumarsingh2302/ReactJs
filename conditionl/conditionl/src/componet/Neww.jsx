import { use, useState}from "react"
function Neww(){
    let [st,setSt]=useState(true)
    let[count,setCount]=useState(0)
    return(
        <>
    {st ? <h1> Wlccome </h1> : ""}
    <button onClick={()=>setSt(false)}>Hide </button>
    <button onClick={()=>setSt(true)}>Show</button>
    <button onClick={()=>setSt(!st)}>  
    {st ? "hide" :"Show"}
    </button> <br /><br />
    <h1>{count}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={()=>setCount(count+1)}>++</button>
        </>
    )
}
export default Neww