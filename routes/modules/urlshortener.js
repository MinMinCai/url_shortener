const express = require('express')
const router = express.Router()
const URLshortener = require('../../models/url_shortener')

router.post('/newurl', (req, res) => {
    if (!req.body.url) {
        req.flash('error', 'Please fill in your url.')
        return res.redirect('/')
    }

    return URLshortener.create(req.body)
        .then(shortenurl => {
            const urlData = shortenurl.toObject()
            // shortenurl 是一個 Mongoose 文檔對象（Document Object），包含了從資料庫中查詢出來的資料
            // toObject() 是 Mongoose 提供的方法，用來將 Mongoose 文檔轉換成普通的 JavaScript 對象
            // 轉換後，urlData 就是一個純 JavaScript 對象，包含了相同的資料，但沒有 Mongoose 的特殊方法和屬性
            res.render('newurl', { shortenurl: urlData })
        })
        .catch(error => {
            console.log(error)
            req.flash('error', 'Error creating short URL')
            return res.redirect('/')
        })
})

module.exports = router