const express = require('express');
const cookieparser = require('cookie-parser');
const connectflash = require('connect-flash');
const exsession = require('express-session');
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(exsession({
    cookie: {
        maxAge: 60000
    },
    secret: "shirshendu1234",
    resave: false,
    saveUninitialized: false
}));

app.use(cookieparser());
app.use(connectflash());
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(express.static('public'))

app.use('/image', express.static(__dirname + '/Image'));

app.use(cors())

const Router = require('./Router/adminrouter');
app.use(Router)

const ApiRouter = require('./Router/apiRouter')
app.use('/api',ApiRouter)

data = 'mongodb+srv://rajdasrd8346:6cW8Gp7Y2iueeWP2@cluster0.cwf3mun.mongodb.net/ServiceProject';
const port = 4225
mongoose.connect(data, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
        console.log(`data base connected successfully`);
    })
}).catch(err=>{
    console.log(err);
})