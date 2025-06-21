import { useState, useEffect } from 'react'
import Note from './components/Notes'
import axios from 'axios'

//props.notes is a list that has objects in it
const App = () => {
  const [notes, setNotes] = useState([]) // the whole list
  const [newNote,setNewNote] = useState( "a new note..") // newnote is just what the user typed
  const [showAll,setShowAll] = useState(true)
  // console.log(notes)
  useEffect(()=>{ 
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response=> { 
        console.log("promise fulfilled")
        setNotes(response.data)
      })
  },[])
  console.log("render",notes.length,"notes")
  const addNote =(event)=> { 
    event.preventDefault()
    console.log("button clicked", event.target)
    const noteobject = { 
      content : newNote,
      important : Math.random()<0.5,
      id:String(notes.length+1)
    }
    setNotes(notes.concat(noteobject))
    setNewNote('')
  }

  const handlechange = (event) => { 
    // console.log(event.target.value)
    setNewNote(event.target.value)
  }
// notestoshow depends on showAll's state is if its true or false 
const notestoshow = showAll?notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>  
      <div> 
        <button onClick={()=> setShowAll(!showAll)}>show {showAll? 'important':'all'}</button>
      </div>
      <ul> 
        {notestoshow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}> 
        <input value={newNote} onChange={handlechange} /> 
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 