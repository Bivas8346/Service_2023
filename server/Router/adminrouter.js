const express = require('express');
const Router = express.Router()
const Controller = require('../Controller/adminController');
const ExtraController = require('../Controller/extraController');
const uploadAbout = require('../Middleware/aboutImage');
const uploadService = require('../Middleware/serviceImage');
const uploadHome = require('../Middleware/homeImage')

// register
Router.get('/register', Controller.adRegister)
Router.post('/regcreate',Controller.adminReg)

//login
Router.get('/', Controller.adLogin)
Router.post('/logcreate',Controller.logIn)
Router.get('/logout',Controller.Logout)

// service add
Router.get('/Dash', Controller.dashbord)
Router.post('/Servicedata', uploadService.single("image"), Controller.serviceCreate)
Router.get('/sdelete/:id', Controller.sdelete)

//about add
Router.get('/about', Controller.about)
Router.post('/aboutdata', uploadAbout.array("image", 3), Controller.aboutCreate)
Router.get('/adelete/:id', Controller.adelete)

//provider data
Router.get('/service', Controller.servicep)
Router.get('/edit/:id', Controller.edit)
Router.post('/update', Controller.update)
Router.get('/delete/:id', Controller.delete)

//all provider data
Router.get('/serviceM', Controller.serviceMP)

//all user
Router.get('/user', Controller.user)

//all user boking data
Router.get('/userb', Controller.booking)

//banner
Router.get('/home', Controller.home)
Router.post('/homeC', uploadHome.array("image", 3), Controller.bannerCreate)
Router.get('/hdelete/:id', Controller.hdelete)

//all contact data
Router.get('/contact', Controller.contact)

//blog add
Router.get('/bloge', Controller.bloge)
Router.post('/blogC', uploadService.single("image"), Controller.blogCreate)
Router.get('/bdelete/:id', Controller.bdelete)


// service provider



//user
Router.get('/userp', ExtraController.user)
Router.post('/userC', ExtraController.UserCreate)

Router.get('/servicep', ExtraController.provider)
Router.post('/serviceC', ExtraController.ProviderCreate)


Router.get('/bookp', ExtraController.book)
Router.post('/bookC', ExtraController.BookCreate)


module.exports = Router;