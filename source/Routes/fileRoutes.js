const express = require ("express")
const { upload, uploadFile, getFiles, searchFile } = require("../Controllers/fileController")
const auth = require("../Middlewares/auth")
const fileRouter = express.Router()


//app.post('/upload', upload.single('file'), (req, res) => {

fileRouter.post('/upload', auth , upload.single('file'), uploadFile)
fileRouter.get('/getAllFiles', getFiles)
fileRouter.get('/search', searchFile)

module.exports = fileRouter;