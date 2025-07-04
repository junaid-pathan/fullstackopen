const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(express.static('dist'))
app.use(cors())
morgan.token('body',(req)=>{ 
    return req.method==="POST"? JSON.stringify(req.body):""
})
app.use(express.json())
app.use(morgan(':method :url :status :response-time ms :body'))
const password = process.argv[2]
const URL = `mongodb+srv://jpathan:${password}@cluster0.jeplmrq.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(URL)

const newschema = new mongoose.Schema({ 
    name:string,
    number:string
})

const Persons = mongoose.model('person',newschema)
let data = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)
app.get("/api/persons",(req,res) => { 
    // res.status(202)
    res.json(data)
})

app.get("/info",(req,res)=>{ 
    const time = new Date().toString()
    const items = data.length
    console.log(time,items)
    res.send(`<div>
        <p>
            Phonebook has info for ${items} people
        </p>
        <p>${time}</p>

    </div>`)
})

app.get('/api/persons/:id',(req,res)=> { 
    const id = req.params.id
    const number = data.find(value=>value.id===id)
    if (number){
    res.json(number)
    }
    else { 
        res.status(404).end()
    }
})

const generateId = () => { 
    const newid = Math.floor(Math.random()*1000000000)
    return String(newid)
}
app.post('/api/persons',(req,res)=> { 
    const newdata  = req.body
    const names = data.map(name => name.name)
    console.log(newdata)
    if (!newdata.name || !newdata.number){ 
       return res.status(400).json({error:'name or number is missing'})
    }
    else if(names.includes(newdata.name))
    { 
        return res.status(400).json({error:'name must be unique'})
    }
    else{ 
        finaldata = { 
            "id":generateId(),
            "name":newdata.name,
            "number":newdata.number
        }
        data.push(finaldata)
        return res.status(201).json(finaldata)
    }
})

app.delete('/api/persons/:id',(req,res)=> { 
    const id = req.params.id
    data = data.filter(contact => contact.id!==id)
    res.status(201).send("Deleted")
})

app.put('/api/persons/:id',(req,res)=> { 
    const id = req.params.id
    data.find(contact => contact.id === id)   
    const updatedcontact = { 
        id: id,
        name:req.body.name,
        number:req.body.number

    }
    data = data.map(contact => contact.id === id?updatedcontact : contact ) 
    res.status(201).json(updatedcontact)
})

const invalidurl = (req,res)=> { 
    console.log("Invalid URL")
    res.status(202).json({error:'unknown point'})
}
app.use(invalidurl)
const port = process.env.port || 3001
app.listen(port,()=> { 
    console.log(`listening on port ${port}`)

})