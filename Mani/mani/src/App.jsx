// function app (){
//   // let name=prompt("enter your name")
//   let emp={
//     fname :"aman",
//     lname :"kumar",
//     contact:1244,
//     Age:23
//   }
//   return(
//     <>
//     {/* <h1>welcome {singh}</h1> */}
//     <h1>my first name is{emp.Age} and contact {emp.contact}</h1>
//     </>
//   )
// }

import Event from "./event"

// export default app

function app (){
  let ar=["AMAN",123,"AGE","vikash",145,4558]
  
  return(
    <>
   <h1>a name is{ar[0]},roll numberis{ar[2]}</h1>
  <Event />
    </>
  )
}

export default app