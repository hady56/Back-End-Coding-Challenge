const RateLimit = require("express-rate-limit");
const RequestRateLimit = RateLimit({
    windowMs: 60000, 
    max: 10, 
    handler: (req, res) =>
    {
        console.log('Wait for one minute and try again   ')
        res.status(429).send("Max number of requests are reached please try agin later")
    },


})

module.exports = RequestRateLimit