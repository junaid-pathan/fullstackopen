const mongoose = require('mongoose')

if (process.argv.length<3){ 
    console.log("Insufficient Arguments")
    process.exit(1)
}
const password = process.argv[2]
const URL = `mongodb+srv://jpathan:${password}@cluster0.jeplmrq.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(URL)

const newschema = new mongoose.Schema({ 
    name:String,
    number:String
})

const Person = mongoose.model('person',newschema)

if (process.argv.length===5){
    const data = new Person({ 
        name:process.argv[3],
        number:process.argv[4]
    })
    data.save().then(result=> { 
        console.log("Added",process.argv[3],process.argv[4])
        mongoose.connection.close()
    })
    
}

if (process.argv.length===3){
    console.log("Phonebook:") 
    Person.find({}).then(result=>{ 
        result.forEach((data)=> { 
            console.log(data.name,data.number)
            mongoose.connection.close()
        })
    })
}
