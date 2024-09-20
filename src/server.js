const express = require('express');
const path = require("path");

const app = express();
const port = 3000;

//config template engine
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.get('/test', function (req, res) {
    res.render('sample.ejs')
  })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})