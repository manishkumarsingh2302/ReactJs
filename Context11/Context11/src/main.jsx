import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
let senddata=createContext()
let ob={name:"Aditya",age:89,contact:123}
// let name="Globle data"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <senddata.Provider value={ob}>
    <App />
    </senddata.Provider>
    
  </StrictMode>,
)
export {senddata}
