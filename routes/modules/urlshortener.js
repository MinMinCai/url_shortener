const express = require('express')
const router = express.Router()
// const URLshortener = require('../../models/url_shortener')

router.get('/newurl', (req, res) => {
    return res.render('newurl')
})

module.exports = router