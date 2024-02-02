const express = require('express')
const path = require('path')
const Arouter = express.Router();
const bodyParser = require('body-parser')

const HomeController = require('../Controller/homeController');
const UserController = require('../Controller/userController');
const ProviderController = require('../Controller/providerController');
// const uploadProvider = require('../Middleware/providerImage')

Arouter.use(express.json());
Arouter.use(express.urlencoded({ extended: true }));
Arouter.use(bodyParser.json());
Arouter.use(bodyParser.urlencoded({ extended: true }));
Arouter.use(express.static('public'));



// home part
Arouter.get('/about', HomeController.about)
Arouter.get("/service", HomeController.service)
Arouter.get("/limitservice", HomeController.Agservice)
Arouter.get("/limitprovider", HomeController.Agtechnecian)
Arouter.get('/home', HomeController.home)


// (User part)

//contact
Arouter.post('/contact', UserController.Contact)

//provider
Arouter.get('/provider', UserController.provider)

//booking
Arouter.post('/booking', UserController.Booking)

//registration
Arouter.post('/register', UserController.registration)

//log in
Arouter.post('/login', UserController.UserLogin)

//review
Arouter.post('/reviewC', UserController.Review)
Arouter.get('/review', UserController.Seereview)

//blog
Arouter.get('/blog', UserController.blog)
Arouter.get('/singleblog/:_id', UserController.singleBloge)
Arouter.post('/comment', UserController.Createcomment)
Arouter.get('/getcommment', UserController.getcomments)

// (provider part)
Arouter.post('/providereg', ProviderController.registration)
Arouter.post('/providerlog', ProviderController.ProviderLogin);
Arouter.get('/Bookpro', ProviderController.book)




// Arouter.get('/post',ApiController.post)

// Arouter.get('/about',ApiController.about)


module.exports = Arouter;