const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config() //always before the model 
const Notes = require('./models/notes') // notes is an object now
app.use(express.static('dist')) //for index.html when / 
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    Notes.find({}).then(result=> { 
      response.json(result)
    })
  })

app.get('/api/notes/:id',(request,response,next)=> { 
    const id = request.params.id
    Notes.findById(id).then(note=> { 
      if (note){ 
        response.json(note)
      }else { 
        response.status(404).end()
      }
    })
    .catch(error=> next(error))
    })
app.delete('/api/notes/:id',(req,res,next)=> { 
    const id = req.params.id
    Notes.findByIdAndDelete(id).then(note=>{ 
      res.status(204).end()
    })
    .catch(error=> next(error))
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

app.post('/api/notes', (request, response,next) => {
  const body = request.body

  const note = new Notes({
    content: body.content,
    important: body.important || false,
  })
  note.save().then(savednote=> { 
    response.json(savednote)
  })
  .catch(error=> next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 
   else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
   }
  next(error) // if its not a casterror then it goes to the next middlware which is expresses default 
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)
const PORT = process.env.PORT || 3001 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})