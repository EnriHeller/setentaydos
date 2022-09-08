const Writings = require("../models/Writings");


const getWritings = async (req,res) =>{
    try {
        const writingsData =  await Writings.find({})
        return res.json({results: writingsData, ok:true})
    } catch (error) {
        return res.status(500).json({ msg: error.message, ok: false })
    }
}

const postWriting = async(req,res) =>{
    try{
        const {user="anon", writing} = req.body;

        await Writings.create({user,writing})
        const writingsData =  await Writings.find({})

        res.status(200).json({results: writingsData, ok:true})

    }catch(error){
        res.status(500).json({msg:error.message, ok:false})
    }
}

module.exports = {getWritings, postWriting}