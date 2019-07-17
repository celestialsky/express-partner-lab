const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.listen(3000, () => {
    console.log('listening to port 3000')
})    