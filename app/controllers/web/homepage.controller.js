const express = require('express');
const router = express.Router();

router.get('/', (req, res) => 
    {
     
    console.log('@views');
    res.render('web/landing');
  })


module.exports = router;