const express = require('express');

const router = express.Router();

const teamRouter = require('./teamsRouter')

router.use(teamRouter)

module.exports = router;