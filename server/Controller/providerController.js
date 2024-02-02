const ProviderModel = require('../Model/provider');
const BookingModel = require('../Model/booking')
const bcriyptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/config');


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
        const setpassword = await securePassword(req.body.password);

        const Pro = new ProviderModel({
            providername: req.body.providername,
            email: req.body.email,
            phone: req.body.phone,
            servicetype: req.body.servicetype,
            address: req.body.address,
            experince: req.body.experince,
            message: req.body.message,
            password: setpassword,
        })
        const provdata = await Pro.save();
        console.log(provdata, "Provider Added Successfully");
        const tokenData = await createToken(provdata._id)
        return res.status(200).send({ success: true, data: provdata, "token": tokenData });
    }
    catch (error) {
        return res.status(404).send({ success: false, message: 'Not Added' });
    }
}


const ProviderLogin = async (req, res) => {
    try {
        
        const Loguser = await ProviderModel.findOne({ email: req.body.email });
        const password = req.body.password
        
        if (ProviderModel && (await bcriyptjs.compare(password, Loguser.password))) {
            const tokenData = await createToken(Loguser._id)
            console.log(tokenData);
            return res.status(200).json({ "User": Loguser, "token": tokenData });
        }
        return res.status(400).send("Invalide Data");
    }
    catch (error) {
        console.log(error);
    }
}

const book = async (req, res) => {
    try {
        const Seebook = await BookingModel.find()
        return res.status(200).json({ success: true, messsage: "get all Booking data", data: Seebook })
    }
    catch (error) {
        return res.status(404).json({ success: false, message: "Not get Booking Data" })
    }
}


module.exports = { registration, ProviderLogin, book };