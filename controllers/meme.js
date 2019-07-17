const express = require('express');
const router = express.Router();
const Memes = require('../models/memes');

router.get('/',(req,res)=>{
    res.send(Memes)
})

router.get('/index',(req,res)=>{
    res.render('index.ejs',{
        memes: Memes
    })
})



module.exports = router;
