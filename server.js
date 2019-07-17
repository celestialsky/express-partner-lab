//https://github.com/celestialsky/express-partner-lab.git

//express
const express = require('express');
//modules
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//controller
const Memes = require('./models/memes')
const memeController = require('./controllers/meme')


//use modules
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//use controllers
app.use('/memes', memeController);

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('listening to port 3000')
})    