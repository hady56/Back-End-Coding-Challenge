const express = require("express")
const cors = require('cors')
const GitHubHandlerRouter = require("./routes/GitHubHandlerRouter")


const app = express()
app.use(cors())
app.use(express.json())
app.use(GitHubHandlerRouter)

module.exports = app