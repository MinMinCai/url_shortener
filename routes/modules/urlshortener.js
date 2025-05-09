const express = require('express')
const router = express.Router()
const URLshortener = require('../../models/url_shortener')

// 建立隨機生成urlid的功能
function generateUrlId() {
    const num = '0123456789'
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charbox = num + alpha + alpha.toLowerCase()
    let result = ''
    for (let i = 0; i < 5; i++) {
        result += charbox[Math.floor(Math.random() * charbox.length)]
    }
    return result
}

// 定義生成urlid的函式
const createNewUrlID = async (url) => {
    try {
        let newUrlID = generateUrlId()
        let existingUrlId = await URLshortener.findOne({ urlid: newUrlID })
        // 先判斷urlid是否已存在，若urlid已存在，重新生成urlid
        while (existingUrlId) {
            newUrlID = generateUrlId()
            existingUrlId = await URLshortener.findOne({ urlid: newUrlID })
        }
        // 定義文檔，確保所有必要欄位都有值
        const newDocument = {
            url: url,
            urlid: newUrlID
        }
        // 建立新聞檔，若urlid不存在(通過while迴圈)，將文檔存入資料庫
        return await URLshortener.create(newDocument)
    } catch (error) {
        console.error('Error creating new URL ID:', error)
        throw error
    }
}

// 使用者輸入網址後送出，到達/newurl頁面
router.post('/newurl', async (req, res) => {
    const url = req.body.url

    // 若使用者未輸入URL (url為空，跳出請填寫url的提示)
    if (!url) {
        req.flash('error', 'Please fill in your url.')
        return res.redirect('/')
    }

    try {
        // 若使用者有輸入URL，判斷URL是否已存在
        const existingUrl = await URLshortener.findOne({ url: url })
        // 若URL已存在，則顯示對應到的urlid
        if (existingUrl) {
            let completeurl = `http://superurlshortener/${existingUrl.urlid}`
            return res.render('newurl', { completeurl })
        }
        // 若URL不存在，將生成新的urlid
        const newUrl = await createNewUrlID(url)
        let completeurl = `http://superurlshortener/${newUrl.urlid}`
        res.render('newurl', { completeurl })
    } catch (error) {
        console.log(error)
        req.flash('error', 'Error creating short URL')
        return res.redirect('/')
    }
})

module.exports = router

// shortenurl 是一個 Mongoose 文檔對象（Document Object），包含了從資料庫中查詢出來的資料
// toObject() 是 Mongoose 提供的方法，用來將 Mongoose 文檔轉換成普通的 JavaScript 對象
// 轉換後，urlData 就是一個純 JavaScript 對象，包含了相同的資料，但沒有 Mongoose 的特殊方法和屬性