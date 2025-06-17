import { useState } from "react";

const Buttons = (props) => <button onClick={props.handleclick}>{props.text}</button>


const StatisticLine = (props) => { 
  return (
   <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )

}
const Statistics = (props)=> { 
  const total = props.good+props.bad+props.neutral
  const average = (props.good*1+props.bad*-1+props.neutral*0)/total
  const positive = (props.good/total)*100+"%"
  if (total===0) { 
    return (
      <div>
        <b>Statistics</b>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <b>Statistics</b>
      <table>
        <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
       </tbody>
      </table>
    </div>
  )
}
const App = ()=> { 
  const [good,setgood] = useState(0)
  const [bad,setbad] = useState(0)
  const [neutral,setneutral] = useState(0)

  const buttonvalue = (rating,ratingfunction) => ()=> { 
    ratingfunction(rating+1)
    // console.log(rating)
  }
  return ( 
    <div>
      <div>
      <b>Give Feedback</b>
      </div>
      <div> 
        <Buttons handleclick={buttonvalue(good,setgood)} text="good"/>
        <Buttons handleclick={buttonvalue(neutral,setneutral)} text="neutral"/>
        <Buttons handleclick={buttonvalue(bad,setbad)} text="bad"/>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  )
}

export default App