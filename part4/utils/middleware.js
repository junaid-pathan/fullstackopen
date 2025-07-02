const logger = require('./logger')
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.errors(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 
   else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
   }
  next(error) // if its not a casterror then it goes to the next middlware which is expresses default 
}

module.exports = {unknownEndpoint,errorHandler}