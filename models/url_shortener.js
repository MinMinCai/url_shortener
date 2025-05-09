const mogoose = require('mongoose')
const Schema = mogoose.Schema
const urlShortenerSchema = new Schema({
    // 指使用者輸入的網址(name="url")
    url: {
        type: String,
        required: true
    },
    // 指使用者輸入的網址分配到的urlid
    urlid: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 5
    } 
// }, {
//     // 添加時間戳
//     timestamps: true,
//     _id: true,      // 確保 MongoDB 生成 _id
//     id: false       // 禁用默認的 id 虛擬屬性
})

// // 創建模型前先刪除所有索引
// const URLshortener = mogoose.model('URLshortener', urlShortenerSchema)
// // 確保索引正確創建
// URLshortener.on('index', error => {
//     if (error) {
//         console.error('索引錯誤：', error)
//     }
// })

module.exports = mogoose.model('URLshortener', urlShortenerSchema)

// 使用者表單填入文字 > 該文字有自己的id > 指定為urlid > 路由導至/urlshortener/{{urlid}} > newurl頁面產生新網址(固定+urlid)
// 後續使用者輸入先前文字 > 尋找該文字的id > 即urlid > 路由導至/urlshortener/{{urlid}} > newurl頁面呼叫urlid對應的網址
// /urlshortener/{{urlid}} 對應唯一的網址