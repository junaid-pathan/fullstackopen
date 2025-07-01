const mongoose = require('mongoose')

if (process.argv.length<3){ 
  console.log("Give Password as argument")
  process.exit(1)
}
const password = process.argv[2]
const url =  `mongodb+srv://jpathan:${password}@cluster0.jeplmrq.mongodb.net/noteapp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteschema = new mongoose.Schema({   //creates an object for u of the schema class
  content:String, 
  important:Boolean
})

const note = mongoose.model('note',noteschema)   //this note is like a handler for doing things


const firstnote = new note({ 
  content:"my third note",
  important : false
})

// firstnote.save().then(result=> { 
//   console.log("Saved",result)
//   mongoose.connection.close()
// })

note.find({}).then(result=> { 
  result.forEach((note)=> { 
    console.log(note)
  })
  mongoose.connection.close()
})