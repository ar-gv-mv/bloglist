const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Blog = require('../models/blog')


usersRouter.get('/', async(request, response) => {
    const users = await User.find({}).populate('blogs', {url: 1, title: 1, author: 1})
    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    const {username, password, name} = request.body

    if (password.length < 3) {
        return response.status(400).json({
            error: "The minimum password size is 3 characters"
        })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    
    const user = new User({
        username,
        passwordHash,
        name
    })

    const savedUser = await user.save()



    response.status(201).json(savedUser)
}) 

module.exports = usersRouter
