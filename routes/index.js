const express = require('express');
const router = new express.Router();
const livestock=require('../models/livestock');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', {title: 'Express'});
});

router.get('/data',function(req,res,next){
            livestock.find({},'')
            .exec(function (err, data) {
           
              if (err) { return next(err); }
              //Successful, so render
  res.send(data)

            });
})
module.exports = router;
