const AboutModel = require('../Model/about');
const ServiceModel = require('../Model/service');
const UserModel = require('../Model/user');
const ProvideModel = require('../Model/provider');
const HomeModel = require('../Model/home');
const BookingModel = require('../Model/booking');
const ContactModel = require('../Model/contact');
const BlogModel = require('../Model/bloge');
const AdminModel = require('../Model/admin');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const bcriyptjs = require('bcryptjs')
const path = require('path');



//login
exports.adLogin = (req, res) => {
    res.render('login', { title: "Admin login" })
}

exports.logIn = (req, res) => {
    AdminModel.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            const pwd = data.password;
            if (bcriyptjs.compareSync(req.body.password, pwd)) {
                const token = jwt.sign({
                    id: data._id,
                    name: data.name,
                    email: data.email,
                }, "BIVAS5555", { expiresIn: "1h" });
                console.log(token);
                console.log(data.name);
                res.cookie('adminToken', token)
                res.cookie('name', data.name)
                res.cookie('email', data.email)
                res.cookie('password', data.password)
                res.redirect('/Dash')
            } else {
                req.flash('massage', "password not match")
                console.log("password not match");
                res.redirect('/')
            }
        } else {
            req.flash('massage', "Your are not admin")
            console.log("You are not Admin");
            res.redirect('/')
        }
    })
}


// register
exports.adRegister = (req, res) => {
    res.render('register', { title: "Admin Register" })
}

exports.adminReg = (req, res) => {
    const user = new AdminModel({
        name: req.body.name,
        email: req.body.email,
        password: bcriyptjs.hashSync(req.body.password, bcriyptjs.genSaltSync(10)),

    })
    user.save().then((data) => {
        if (data) {
            console.log('Admin added successfully..');
            res.redirect('/')
        }
    }).catch((err) => {
        console.log(err, 'Admin not added');
    })
}

//AdminAuth

exports.adminAuth = (req, res, next) => {
    if (req.admin) {
        console.log(req.admin);
        next()
    } else {
        console.log('error while Auth');
        res.redirect('/')
    }
}

// service add
exports.serviceCreate = (req, res) => {
    const Acreate = new ServiceModel({
        servicename: req.body.servicename,
        servicetype: req.body.servicetype,
        serviceno: req.body.serviceno,
    })
    if (req.file) {
        Acreate.image = req.file.path
    }
    Acreate.save().then((data) => {
        if (data) {
            console.log('Service Add Successfully');
            res.redirect('/Dash')
        }
    }).catch((err) => {
        console.log(err, 'Service not Added');
        res.redirect('/Dash')
    })
}

exports.dashbord = (req, res) => {
    ServiceModel.find()
        .then(serviced => {
            res.render('dashboard', { serviced, adminData: req.admin, })
        })
        .catch(error => {
            res.render('dashboard', { error: `Eroor to fatching data ${serviced}` })
        })

}

exports.sdelete = ((req, res) => {
    const dbrid = req.params.id;
    ServiceModel.deleteOne({ _id: dbrid }).then(del => {
        console.log(del, "deleted");
        res.redirect('/Dash');
    })
        .catch(err => {
            console.log(err);
        })
})

//about add
exports.aboutCreate = (req, res) => {
    const Acreate = new AboutModel({
        title: req.body.title,
        description: req.body.description,
    })
    if (req.files) {
        let path = ''
        req.files.forEach(function (files, index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        Acreate.image = path
    }
    Acreate.save().then((data) => {
        if (data) {
            console.log('About Add Successfully');
            res.redirect('/about')
        }
    }).catch((err) => {
        console.log(err, 'About not Added');
        res.redirect('/about')
    })
}

exports.about = (req, res) => {
    AboutModel.find()
        .then(aboutd => {
            res.render('about', { aboutd, adminData: req.admin, })
        })
        .catch(error => {
            res.render('about', { error: `Eroor to fatching data ${aboutd}` })
        })


}


exports.adelete = ((req, res) => {
    const dbrid = req.params.id;
    AboutModel.deleteOne({ _id: dbrid }).then(del => {
        console.log(del, "deleted");
        res.redirect('/about');
    })
        .catch(err => {
            console.log(err);
        })
})


//provider data
exports.servicep = (req, res) => {
    ProvideModel.find()
        .then(prov => {
            res.render('servicep', { prov, adminData: req.admin, })
        })
        .catch(error => {
            res.render('servicep', { error: `Eroor to fatching data ${prov}` })
        })
}


exports.edit = ((req, res) => {
    const pvid = req.params.id;
    ProvideModel.findById(pvid).then(prov => {
        console.log(prov);
        res.render('editserv', { prov, adminData: req.admin, })
    })
        .catch(err => {
            res.render('editserv', { error: `happend something error, cant load` })
        })
})

exports.update = ((req, res) => {
    const prov_id = req.body.p_id;

    ProvideModel.findByIdAndUpdate(prov_id, {
        status: true
    }).then(data => {
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "bivasdas005@gmail.com",
                pass: "gwfniqmpthmrngmh"
            }
        });
        var mailOptions = {
            from: 'no-reply@bivas.com',
            to: data.email,
            subject: 'Account Verification',
            text: 'Hello ' + data.providername + ',\n\n' + 'Succesfully Add as a Service Provider: \nhttp:\/\/' + data.email + '\/' + data.token + '\n\nThank You To Join Us!\n'
        };
        transporter.sendMail(mailOptions, function (err) {
            if (err) {
                console.log("Techniclal Issue...");
            } else {
                // req.flash("message", "A Verfication Email Sent To Your Mail ID.... Please Verify By Click The Link.... It Will Expire By 24 Hrs...");
                res.redirect("/service");
            }
        });
    })
        .catch(err => {
            console.log(err);
        })
})

exports.delete = ((req, res) => {
    const dbrid = req.params.id;
    ProvideModel.deleteOne({ _id: dbrid }).then(del => {
        console.log(del, "deleted");
        res.redirect('/service');
    })
        .catch(err => {
            console.log(err);
        })
})



//all provider data
exports.serviceMP = (req, res) => {
    ProvideModel.find()
        .then(prov => {
            res.render('serviceMP', { prov, adminData: req.admin, })
        })
        .catch(error => {
            res.render('serviceMP', { error: `Eroor to fatching data ${prov}` })
        })
}

//all user
exports.user = (req, res) => {
    UserModel.find()
        .then(usev => {
            res.render('viewuser', { usev, adminData: req.admin, })
        })
        .catch(error => {
            res.render('viewuser', { error: `Eroor to fatching data ${usev}` })
        })
}

//all user boking data
exports.booking = (req, res) => {
    BookingModel.find()
        .then(useb => {
            res.render('Bookingu', { useb, adminData: req.admin, })
        })
        .catch(error => {
            res.render('Bookingu', { error: `Eroor to fatching data ${useb}` })
        })
}

//banner
exports.bannerCreate = (req, res) => {
    const Acreate = new HomeModel({
        title: req.body.title,
        description: req.body.description,
    })
    if (req.files) {
        let path = ''
        req.files.forEach(function (files, index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        Acreate.image = path
    }
    Acreate.save().then((data) => {
        if (data) {
            console.log('Banner data Add Successfully');
            res.redirect('/home')
        }
    }).catch((err) => {
        console.log(err, 'Banner data not Added');
        res.redirect('/home')
    })
}

exports.home = (req, res) => {
    HomeModel.find()
        .then(hom => {
            res.render('home', { hom, adminData: req.admin, })
        })
        .catch(error => {
            res.render('home', { error: `Eroor to fatching data ${hom}` })
        })

}

exports.hdelete = ((req, res) => {
    const dbrid = req.params.id;
    HomeModel.deleteOne({ _id: dbrid }).then(del => {
        console.log(del, "deleted");
        res.redirect('/home');
    })
        .catch(err => {
            console.log(err);
        })
})

//all contact data
exports.contact = (req, res) => {
    ContactModel.find()
        .then(cont => {
            res.render('contac', { cont, title: "Admin Contact Page", })
        })
        .catch(error => {
            res.render('contac', { error: `Admin Contact Page ${cont}` })
        })
}


//blog add
exports.bloge = (req, res) => {
    BlogModel.find()
        .then(bloge => {
            res.render('blog', { bloge, adminData: req.admin, })
        })
        .catch(error => {
            res.render('blog', { error: `Admin Bloge ${bloge}` })
        })
}


exports.blogCreate = (req, res) => {
    const Acreate = new BlogModel({
        title: req.body.title,
        description: req.body.description,
    });
    if (req.file) {
        Acreate.image = req.file.path
    }
    Acreate.save().then((data) => {
        if (data) {
            console.log('Bloge Add Successfully');
            res.redirect('/bloge')
        }
    }).catch((err) => {
        console.log(err, 'Bloge data not Added');
        res.redirect('/bloge')
    })
}

exports.bdelete = ((req, res) => {
    const dbrid = req.params.id;
    BlogModel.deleteOne({ _id: dbrid }).then(del => {
        console.log(del, "deleted");
        res.redirect('/bloge');
    })
        .catch(err => {
            console.log(err);
        })
})

// logout 

exports.Logout = (req, res) => {
    res.clearCookie("adminToken")
    res.redirect('/')
}