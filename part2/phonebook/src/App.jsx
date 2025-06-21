import { useState } from 'react'
import Numbers from './components/display'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123456789'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] =useState('')
  const [filter,setFilter] = useState('')
  const namelist = persons.map(person=> person.name.toLowerCase())
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
      alert(`${newName} has already been added to the phonebook`)
    }else{ 
      const newobject = { name:newName, number:newNumber}
      setPersons(persons.concat(newobject))
      setNewName('')
      setNewNumber('')
    }
  }

  const filtername = (event) => { 
    const searched = event.target.value
    setFilter(searched)
  }

  const personsToShow = persons.filter(person =>
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
      <Numbers persons={filter===''?persons:personsToShow} /> 
    </div>
  )
}
export default App