const {eventsView} = require("../controllers/event");
const router = require('express').Router()

router.get('/events',eventsView)
module.exports = router