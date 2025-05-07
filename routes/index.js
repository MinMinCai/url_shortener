const express = require('express');
const router = express.Router();

const home = require('./modules/home')
const urlshortener = require('./modules/urlshortener')

router.use('/', home)
router.use('/urlshortener', urlshortener)

module.exports = router