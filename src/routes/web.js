const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello World 123')
  })

router.get('/test', function (req, res) {
    res.render('sample.ejs')
  })

module.exports = router;