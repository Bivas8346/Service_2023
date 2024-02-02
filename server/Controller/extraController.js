const UserModel = require('../Model/user');
const ProvideModel = require('../Model/provider');
const BookingModel =require('../Model/booking')

exports.user = (req, res) => {
    res.render('extra/user', { title: "user login" })
}

exports.UserCreate = (req, res) => {
    const Acreate = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    Acreate.save().then((data) => {
        if (data) {
            console.log('User Add Successfully');
            res.redirect('/userp')
        }
    }).catch((err) => {
        console.log(err, 'User not Added');
        res.redirect('/userp')
    })
}

exports.provider = (req, res) => {
    res.render('extra/serviceprovider', { title: "service provider" })
}

exports.ProviderCreate = (req, res) => {
    const Acreate = new ProvideModel({
        providername: req.body.providername,
        provideremail: req.body.provideremail,
        providerphone: req.body.providerphone,
        servicetype: req.body.servicetype,
        address: req.body.address,
        experince: req.body.experince,
        password: req.body.password,
    });
    Acreate.save().then((data) => {
        if (data) {
            console.log('Service provider Add Successfully');
            res.redirect('/servicep')
        }
    }).catch((err) => {
        console.log(err, 'Service provider not Added');
        res.redirect('/servicep')
    })
}


exports.book = (req, res) => {
    res.render('extra/booking', { title: "user booking" })
}

exports.BookCreate = (req, res) => {
    const Acreate = new BookingModel({
        name: req.body.name,
        email: req.body.email,
        service: req.body.service,
        providername: req.body.providername,
        date: req.body.date,
    });
    Acreate.save().then((data) => {
        if (data) {
            console.log('Booking Successfully');
            res.redirect('/bookp')
        }
    }).catch((err) => {
        console.log(err, 'Booking not Added');
        res.redirect('/bookp')
    })
}