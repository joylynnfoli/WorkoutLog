const express = require('express');
const router = express.Router();

router.get('/practice', function(req, res){
    res.send('Hey!! This is a practice route!')
})

router.get('/about', function(req, res){
    res.send('hey this is about route')
})

module.exports = router