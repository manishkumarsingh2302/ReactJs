import Child2 from "./child2.jsx"
function Child1(props){
return(
    <><h1>My name is{props.name}</h1>
    <Child2 age="20"/>
    </>
)
}
export default Child1