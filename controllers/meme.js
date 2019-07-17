const express = require('express');
const router = express.Router();
const Memes = require('../models/memes');

router.get('/',(req,res)=>{
    res.send(Memes)
})



module.exports = router;
