const Blog = require('../models/blog')

initialBlogs = [
    {title: 'testi1', author: 'tata', url: 'tutu', likes: 78}, 
    {title: 'testi2', author: 'toto', url: 'titi', likes: 32}
]

const nonExistingId = async () => {
    const blog = new Blog({ content: 'willremovethissoon' })
    await note.save()
    await note.deleteOne()
  
    return note._id.toString()
  }