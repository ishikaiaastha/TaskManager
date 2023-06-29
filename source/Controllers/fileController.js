//const express = require('express');
const multer = require('multer');
const fileModel = require('../Models/file')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb( null, path.join(__dirname,"../uploads"))
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname+"-"+Date.now()+".png")

        }
    })
})

const uploadFile = async  (req, res)=>{
    //const logicalPath  = req.body;

    const newFile = new fileModel({
        filename: req.file.filename,
        pathname: req.file.destination,
        userId: req.userId,
        

    })

    try {
        await newFile.save();
        res.status(201).json( newFile)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "File not saved"})
    }
}

const getFiles = async (req, res) =>{
    try {
        const file = await fileModel.find()
        res.status(200).json(file)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "Could not get files"})
    }
}

module.exports ={
    uploadFile,
    upload,
    getFiles

}