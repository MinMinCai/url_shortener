const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session')
const flash = require('connect-flash')
const port = 3001

const routes = require('./routes');
require('./config/mongoose')

const app = express();

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs');

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))

// 配置 session
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}))

app.use(flash())
// 設置本地變數
app.use((req, res, next) => {
  res.locals.error = req.flash('error')
  res.locals.success = req.flash('success')
  next()
})

app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
})