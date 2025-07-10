const logger = require('./logger')


const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 
   else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
   }
  next(error) // if its not a casterror then it goes to the next middlware which is expresses default 
}

// this has to be the last loaded middleware, also all the routes should be registered before this!


module.exports = { requestLogger,unknownEndpoint,errorHandler}