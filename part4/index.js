const morgan = require('morgan')
const config = require('./utils/config')
const app = require('./app')
const logger = require('./utils/logger')

app.listen(config.PORT,()=> { 
    logger.info("Running")

})