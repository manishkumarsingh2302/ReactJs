import { useState } from "react"

function About (){

    let [arr,setArr] = useState({
        name:"Manish", contact:12344
    })
    let [num,setNum] = useState([1,5,6,7,8])
    return(
        <>
        <h1>About {arr.name} {arr.contact} </h1> 
        <h1>Num are {num[0]}, {num[1]}, {num[2]}, {num[3]}, {num[4]}  </h1>
        </>
    )
}

export default About