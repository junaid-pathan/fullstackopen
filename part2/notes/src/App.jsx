import { useState, useEffect } from 'react'
import Note from './components/Notes'
import axios from 'axios'
import Footer from './components/footer'
import Notification from './components/notification'
import noteService from './services/notes'

//props.notes is a list that has objects in it
const App = () => {
  const [notes, setNotes] = useState([]) // the whole list
  const [newNote,setNewNote] = useState( "a new note..") // newnote is just what the user typed
  const [showAll,setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  // console.log(notes)
  useEffect(()=>{ 
    console.log('effect')
    noteService.getAll()  //getall returns a promise but this promise has only data content
      .then(startingnotes=> { 
        console.log("promise fulfilled")
        setNotes(startingnotes)
      })
  },[])
  // console.log("render",notes.length,"notes")

  const addNote =(event)=> { 
    event.preventDefault()
    console.log("button clicked", event.target)
    const noteobject = { 
      content : newNote,
      important : Math.random()<0.5,
    }
    noteService.create(noteobject)
      .then(response=>{ 
        console.log(response)
        setNotes(notes.concat(response))
      })
    setNewNote('')
  }

  const handlechange = (event) => { 
    // console.log(event.target.value)
    setNewNote(event.target.value)
  }
// notestoshow depends on showAll's state is if its true or false 
const notestoshow = showAll?notes : notes.filter(note => note.important)
const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
    const note = notes.find(n=> n.id===id)
    const changednote = {...note,important:!note.important}
    noteService.update(id,changednote)
      .then(updatednote=>{ 
        setNotes(notes.map(note=> note.id===id?updatednote:note))
      })
      .catch(error=> { 
        setErrorMessage("This note was already removed from server")
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setNotes(notes.filter(note=> note.id !== id))
      })
      
  }
  return (
    <div>
      <h1>Notes</h1>  
      <Notification message={errorMessage} />
      <div> 
        <button onClick={()=> setShowAll(!showAll)}>show {showAll? 'important':'all'}</button>
      </div>
      <ul> 
        {notestoshow.map(note => 
          <Note 
          key={note.id} 
          note={note} 
          toggleimportance={()=> toggleImportanceOf(note.id)}/>
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