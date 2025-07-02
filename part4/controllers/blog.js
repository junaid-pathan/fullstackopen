const express = require('express')
const blogroutes = express.Router()
const Blog = require('../models/blogs')

blogroutes.get('/',(req,res,next)=>{ 
    Blog.find({}).then(blog=> { 
        res.json(blog)
    })
    .catch(error=>next(error))
})

blogroutes.post('/',(req,res,next)=> { 
    const blog = new Blog(req.body)
    blog.save().then(result=>{ 
        res.status(201).json(result)
    })
    .catch(error=>next(error))

})

module.exports = blogroutes