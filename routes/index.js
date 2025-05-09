const express = require('express');
const router = express.Router();

const home = require('./modules/home')
const urlshortener = require('./modules/urlshortener')

router.use('/urlshortener', urlshortener)
router.use('/', urlshortener) // 針對短網址的請求
router.use('/', home)


module.exports = router