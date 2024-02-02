const UserModel = require('../Model/user');
const bcriyptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/config');
const BookingModel = require('../Model/booking');
const ContactModel = require('../Model/contact');
const ProvideModel = require('../Model/provider');
const BlogeModel = require('../Model/bloge');
const ReviewModel = require('../Model/review');
const CommentModel = require('../Model/comment')
const TokenModel = require('../Model/token');
const nodemailer = require('nodemailer');

//registration
const securePassword = async (password) => {
    try {
        const passwordHas = await bcriyptjs.hash(password, 10);
        return passwordHas
    } catch (error) {
        console.log(error);
    }
}

const createToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, config.secretjwt, { expiresIn: "1h" });
        return token
    }
    catch (error) {
        console.log(error);
    }
}

const registration = async (req, res) => {
    try {
        const setpassword = await securePassword(req.body.password)
        const User = new UserModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: setpassword,
        })
        const userdata = await User.collection.findOne({ email: req.body.email })
        if (userdata) {
            return res.status(404).send({ success: false, message: "This mail already exist" });
        }
        else {
            const Usdata = await User.save();
            console.log(Usdata, "User Added Successfully");
            const tokenData = await createToken(Usdata._id)
            return res.status(200).send({ success: true, data: Usdata, "token": tokenData });
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

//log in
const UserLogin = async (req, res) => {
    try {
        const Loguser = await UserModel.findOne({ email: req.body.email });

        const password = req.body.password
        if (Loguser && (await bcriyptjs.compare(password, Loguser.password))) {
            const tokenData = await createToken(Loguser._id)
            console.log(Loguser, "User login Successfully");
            console.log(tokenData);
            return res.status(200).json({ "User": Loguser, "token": tokenData });
        }
        return res.status(400).send("Invalide Data");
    }
    catch (error) {
        console.log(error);
    }
}

//booking
const Booking = async (req, res) => {
    try {
        const bookingData = await new BookingModel({
            name: req.body.name,
            email: req.body.email,
            service: req.body.service,
            providername: req.body.providername,
            date: req.body.date,
            location: req.body.location,
            message: req.body.message
        })
        const book = await bookingData.save().then(data => {
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
                from: 'no-reply@Bivas.com',
                to: data.email,
                subject: 'Service Booking Mail',
                text: 'Hello ' + data.name + ',\n\n' + 'Your Booking Is Successfull : \nYour Booking Date\/\/' + data.date + '\nAt \/\/' + data.location + '\n\nThank You!\n'
            };
            transporter.sendMail(mailOptions, function (err) {
                if (err) {
                    console.log("Techniclal Issue...");
                } else {
                    req.flash("message", "A Booking Mail send to your mail....");
                }
            });
        }).catch(err => {
            console.log(err);
        })
        return res.status(201).json({ success: true, message: "Booking Done message", data: book })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "Booking not added" })
    }
}

//contact
const Contact = async (req, res) => {
    try {
        const contactData = await new ContactModel({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        })
        const conta = await contactData.save();
        return res.status(201).json({ success: true, message: "added contact message", data: conta })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "contact message not added" })
    }
}


//review
const Review = async (req, res) => {
    try {
        const reviewData = await new ReviewModel({
            name: req.body.name,
            email: req.body.email,
            profession: req.body.profession,
            message: req.body.message,
        })
        const revi = await reviewData.save();
        return res.status(201).json({ success: true, message: "added  Review", data: revi })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "review not added" })
    }
}


const Seereview = async (req, res) => {
    try {
        const Seerevi = await ReviewModel.find()
        return res.status(200).json({ success: true, messsage: "get all Review data", data: Seerevi })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "Not get Review Data" })
    }
}


//provider
const provider = async (req, res) => {
    try {
        const Seeservice = await ProvideModel.find()
        return res.status(200).json({ success: true, messsage: "get all provider data", data: Seeservice })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "Not get provider Data" })
    }
}


//blog
const blog = async (req, res) => {
    try {
        const Seeblog = await BlogeModel.find()
        return res.status(200).json({ success: true, messsage: "get all Bloge data", data: Seeblog })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "Not get Bloge Data" })
    }
}

const singleBloge = async (req, res) => {
    try {
        await BlogeModel.findById(req.params._id).then(data => {
            return res.status(200).json({ success: true, messsage: "get single Bloge data", data: data })
        })
    } catch {
        return res.status(404).json({ success: false, message: "Not fetch Bloge Data" })
    }
}

const Createcomment = async (req, res) => {

    try {
        const commentData = await new CommentModel({
            postId: req.body.postId,
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
        })
        console.log(commentData);
        const contb = await commentData.save();

        return res.status(201).json({ success: true, message: "new comment added", data: contb })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "Comment not added" })
    }
}

const getcomments = async (req, res) => {
    try {
        await CommentModel.find().then(data => {
            return res.status(200).json({ success: true, data: data, message: 'comments fetched' })
        })
    } catch {
        return res.status(400).json({ success: false, message: "Server error" })
    }
}



module.exports = {
    registration,
    UserLogin,
    Booking,
    Contact,
    provider,
    blog,
    singleBloge,
    Review,
    Seereview,
    Createcomment,
    getcomments
}