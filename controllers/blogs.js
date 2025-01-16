const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const mongoose = require('mongoose')

blogsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
blogsRouter.post('/', async (request, response, next) => {
    const {title, author, url, likes} = request.body
  
    const blog = new Blog({
      title: title,
      author: author,
      url: url,
      likes: likes
    })
    
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)

  })

module.exports = blogsRouter