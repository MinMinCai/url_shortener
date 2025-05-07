const mogoose = require('mongoose')
const Schema = mogoose.Schema
const urlShortenerSchema = new Schema({
    url: {
        type: String,
    }
})

module.exports = mogoose.model('URLshortener', urlShortenerSchema)