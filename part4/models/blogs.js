const mongoose = require('mongoose')
const config = require('../utils/config')
mongoose.connect(config.MONGODBURI)
const blogSchema = new mongoose.Schema({ 
    title: { 
        type:String,
        required: true
    },
    author: { 
        type:String,
        required: true
    },
    url:{ 
        type:String,
        required:true
    },
    likes: { 
        type:Number,
        required:true
    },
})

const Blog = mongoose.model('blog',blogSchema)

module.exports= Blog