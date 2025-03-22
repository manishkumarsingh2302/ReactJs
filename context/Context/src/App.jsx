import {createContext} from "react"
import Child1 from "./Child1"

let appdate=createContext()
let name="from app componet"

function App() {
 
  return (
   <>
<h1>halo</h1>
<appdate.Provider value={name}>
  <Child1/>
</appdate.Provider>

   </>
  )
}

export default App
export {appdate}
