const AboutModel = require('../Model/about');
const HomeModel = require('../Model/home');
const ServiceModel = require('../Model/service');
const ProviderModel = require('../Model/provider');


const home = async (req, res) => {
    try {
        const Seehome = await HomeModel.find().limit(2)
        res.status(200).json({ success: true, messsage: "get 2 home data", data: Seehome })
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Not get home Data" })
    }
}

const about = async (req, res) => {
    try {
        const Seeabout = await AboutModel.find()
        res.status(200).json({ success: true, messsage: "get all about data", data: Seeabout })
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Not get about Data" })
    }
}

const service = async (req, res) => {
    try {
        const Seeservice = await ServiceModel.find()
        res.status(200).json({ success: true, messsage: "get all service data", data: Seeservice })
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Not get service Data" })
    }
}

const Agservice = async (req, res) => {
    try {
        const Seeservice = await ServiceModel.aggregate([
            { $limit: 3 }
        ])
        res.status(200).json({ success: true, messsage: "get 3 service data", data: Seeservice })
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Not get service Data" })
    }
}

const Agtechnecian = async (req, res) => {
    try {
        const Seeprovider = await ProviderModel.aggregate([
            { $limit: 4 }
        ])
        res.status(200).json({ success: true, messsage: "get 4 provider data", data: Seeprovider })
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Not get provider Data" })
    }
}

module.exports = {
    about, home, service, Agservice, Agtechnecian
}