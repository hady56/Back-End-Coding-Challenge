const express = require('express')
const RequestRateLimit = require('../middleware/RateLimit')
const router = express.Router()
const GitHubHandlerController = require('../controllers/GitHubHandlerController')

module.exports = router.get('/TrendingRepos', RequestRateLimit, GitHubHandlerController.TrendingReposHandler)