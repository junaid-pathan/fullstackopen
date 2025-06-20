// // const Hello = (props) => { 
// //   // console.log(props)
// //   const birthyear = ()=> { 
// //     const yearnow = new Date().getFullYear() 
// //     return yearnow - props.age
// //   }
// //   return (
// //     <div> 
// //       <p>Hello {props.name}, you are {props.age} old</p>
// //       <p>So you were born in {birthyear()}</p>
// //     </div>
// //   )
// // }
// // const App = () => {
// //   const name = "Peter"
// //   const age  = "19"
// //   return (
// //     <div>
// //       <h1>Greetings</h1>
// //       {/* <Hello /> */}
// //       {/* <Hello name = "Junaid"/>  */}
// //       <Hello name = {name}  age = {age} /> 
// //     </div>
// //   )
// // }

// // export default App

// // FIRST PART OVER 

// import { useState } from "react";


// const App = () => {
//   const [value,setvalue] = useState(0)
//   const increaseone = () => setvalue(value+1)
//   const resetzero = ()=> setvalue(0)
//   const decreaseone = ()=>  setvalue(value-1)
//   return( 
//     <div>
//       <Counter value={value} /> 
//       <Button handleclick = {increaseone}  value = '+' /> 
//       <Button handleclick = {resetzero}  value = 'Reset' /> 
//       <Button handleclick = {decreaseone}  value = '-' /> 

//     </div>
//   )
// } 

// const Counter = ({value})=>{ 
//   return ( 
//     <div> 
//       {value}
//     </div>
//   )

// }

// // const Increment = (props) =>{ 
// //   <button onClick={props.handleclick}>+</button>
// // }
// // const Reset = (props) => { 
// //   <button onClick={props.handleclick}>Zero</button>
// // }
// // const Decrement = ({decreaseone}) =>{ 
// //   <button onClick={decreaseone}>-</button>
// // }
// // THIS BAD WAY instead

// const Button = (props) => { 
//   return ( 
//   <button onClick={props.handleclick}>{props.value}</button>) 

// }

// export default App
import Notes from "./components/Notes"
import { useState } from "react"

const History = (props) => { 
  if (props.allclicks.length === 0) { 
    return ( 
      <div> 
        the app is used by pressing the buttons
      </div>
    )
  }
  return ( 
    <div> 
      button press history: {props.allclicks.join("")}
    </div>
  )

}

const Button = ({handleclick,text})=> <button onClick={handleclick}>{text}</button>

const App = ({notes}) => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allclicks,setAll] = useState([])
  const [total,setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allclicks.concat("L"))
    // console.log('left before', clicks.left)
    const updatedleft = clicks.left+1            //cuz of the async stuff 
    setClicks({...clicks,left:updatedleft})   // u have to pass other info that u arent changing as well no matter what
    // console.log('left after', clicks.left)
    setTotal(updatedleft+clicks.right)
  }

  const handleRightClick = () => {
    setAll(allclicks.concat("R"))
    // console.log("right before",clicks.right)
    const updatedright = clicks.right+1
    setClicks({...clicks,right:updatedright})
    console.log("right after",clicks.right)
    setTotal(updatedright+clicks.left)
  } 
  return (
    <div>
      {clicks.left}
      <Button handleclick={handleLeftClick} text="left"/>
      <Button handleclick={handleRightClick} text="right"/>
      {clicks.right}
      <History allclicks={allclicks}/>
      {total}
      <ul> 
        {notes.map(note=> <Notes key={note.id} note ={note} />)}
      </ul>
    </div>
  )
}

  export default App