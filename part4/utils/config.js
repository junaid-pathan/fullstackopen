require('dotenv').config()
const PORT = process.env.PORT
const MONGODBURI = process.env.MONGOURL

module.exports = {PORT,MONGODBURI}