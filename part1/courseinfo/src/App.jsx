const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course ={course}/>
      <Content parts = {course}/> 
      <Total exercise={course}/>

    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Content = ({parts}) =>{ 
  return ( 
    <div> 
     <Parts part={parts.parts[0]}/>
     <Parts part={parts.parts[1]}/>
     <Parts part={parts.parts[2]}/>
    </div>
  )
}
const Parts =({part}) =>  <p>{part.name} {part.exercises}</p> 
const Total = (props) => { 
  return <p>Number of exercises {props.exercise.parts[0].exercises+props.exercise.parts[1].exercises+props.exercise.parts[2].exercises}</p>
}
export default App