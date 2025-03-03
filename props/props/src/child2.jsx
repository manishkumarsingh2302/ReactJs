import Child3 from "./Child3"

function child2(props){
    let{lname}=props

return(
    <>
    <h1>from child 2{ lname}</h1>
    
    < Child3  name="manish"/>
    </>
    
    
)
}
export default Child2
