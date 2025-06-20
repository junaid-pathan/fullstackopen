const Course = ({courses}) => {  //course is [ with two objects ]
  return(<div> 
    {courses.map((subhead) => (
        <div key={subhead.id}> 
        <Header course={subhead} />
        <Content course={subhead}/>
        <Total course={subhead} /> 
        </div>
    ))}
</div>)
}
const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Content = ({course}) =>{ 
  return (
    <div> 
      {course.parts.map(part => <Parts key={part.id} part={part}/>)}
    </div>
  )
}
const Parts =({part}) =>  <p>{part.name} {part.exercises}</p> 

const Total = ({course}) => { 
    const sum = course.parts.reduce((s,p)=>s+p.exercises,0)
    return ( 
        <p><b>total of {sum} exercises</b></p>
    )
}

export default Course