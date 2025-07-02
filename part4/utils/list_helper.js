const dummy = (blogs) => { 
    return 1 
}

const totalLikes= (blogs)=> {
    let likes = 0 
    blogs.forEach((blog)=>{ 
        likes+= blog.likes
    })
    return likes

}

const favblog = (blogs) => { 
    if (blogs.length === 0) { 
        return null
    }

  return blogs.reduce((max, blog) => 
    blog.likes > max.likes ? blog : max
  )
}
module.exports = { 
    dummy,
    totalLikes,
    favblog
}