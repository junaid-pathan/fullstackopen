const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course ={course}/>
      <Content parts = {parts}/> 
      <Total exercise={parts}/>

    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({parts}) =>{ 
  return ( 
    <div> 
     <Parts part={parts[0]}/>
     <Parts part={parts[1]}/>
     <Parts part={parts[2]}/>
    </div>
  )
}
const Parts =({part}) =>  <p>{part.name} {part.exercises}</p> 
const Total = (props) => { 
  return <p>Number of exercises {props.exercise[0].exercises+props.exercise[1].exercises+props.exercise[2].exercises}</p>
}
export default App