import { useState,useEffect } from 'react'
import Numbers from './components/display'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] =useState('')
  const [filter,setFilter] = useState('')
  const namelist = persons.map(person=> person.name.toLowerCase())
  const hook = ()=> { 
    console.log("hook just ran")
    axios 
      .get("http://localhost:3001/api/persons")
      .then(response=> { 
        setPersons(response.data)
      })
  }
  useEffect(hook,[])
  
  const handlechange = (change,event) => { 
    if (change=='name'){ 
      setNewName(event.target.value)
    }else{ 
      setNewNumber(event.target.value)
    }
    
  }

  const addDetails = (event)=> { 
    event.preventDefault()
    if (namelist.includes(newName.toLowerCase())) { 
      if (window.confirm(`${newName} is already added. Do you want to replace the number?`)){ 
        const olddata = persons.find(obj => obj.name === newName )
        const newdata = {name:newName,number:newNumber}
        console.log(olddata)
        axios 
          .put(`http://localhost:3001/api/persons/${olddata.id}`,newdata)
          .then(response=> setPersons(persons.map( person => 
            person.id === olddata.id? response.data : person)))
      console.log("ok")
      }}
    else{ 
      const newobject = { name:newName, number:newNumber}
      axios
        .post("http://localhost:3001/api/persons",newobject)
        .then(response=> { 
          setPersons(persons.concat(response.data))
        })
      
    }
    setNewName('')
    setNewNumber('')
  }

  const deleteItem = (person) => { 
    if(window.confirm(`Delete ${person.name} ? `)){ 
    axios 
      .delete(`http://localhost:3001/persons/${person.id}`)
      .then(response=> { 
        
        setPersons(persons.filter(people => people.id !==person.id))})
      .catch(error => { 
        console.log("L")
      })

  }}

  const filtername = (event) => { 
    const searched = event.target.value
    setFilter(searched)
  }

  const filteredpersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <div> 
        Filter shown with <input value={filter} onChange={filtername}/>
      </div>
      <h2>Add New</h2>
      <form onSubmit={addDetails}>
        <div>
          name: <input value={newName} onChange={(event)=>handlechange('name',event)}/>
        </div>
        <div> 
          number : <input value={newNumber} onChange={(event)=>handlechange('number',event)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={filter===''?persons:filteredpersons} deleteItem={deleteItem} /> 
    </div>
  )
}
export default App