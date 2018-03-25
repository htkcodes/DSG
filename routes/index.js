const express = require('express');
const router = new express.Router();
const livestock=require('../models/livestock');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', {title: 'Express'});
});

//
router.get('/data',function(req,res,next){
            livestock.find({},'')
            .exec(function (err, data) {
           
              if (err) { return next(err); }
              //Successful, so render
  res.send(data)

            });
})
router.post('/data',function(req,res,next){
let district=req.body.District;
let farmers=req.body.Farmers;
let propertySize=req.body.Property_Size_Ha;
let parishExtensionName=req.body.Parish_Extension_Name;
let parishExtensionCode=req.body.Parish_Extension_Code;
let parishCode=req.body.Parish_Code;
let parish=req.body.Parish;
let locationCode=req.body.Location_Code;
let livestockTypeCode=req.body.Livestock_Type_Code;
let livestockName=req.body.Livestock_Name;
let livestockGroupName=req.body.Livestock_Group_Name;
let livestockGroupCode=req.body.Livestock_Group_Code;
let livestockCount=req.body.Livestock_Count_Sum;

let newlivestock=new livestock({
  Location_Code:locationCode,
  Property_Size:propertySize,
  Parish_Code:parishCode,
  Parish_Extension_Code:parishExtensionCode,
  District:district,
  Parish:parish,
  Parish_Extension_Name:parishExtensionName,
  Livestock_Name:livestockName,
  Livestock_Type_Code:livestockGroupCode,
  Livestock_Group_Code:livestockGroupCode,
  Livestock_Group_Name:livestockGroupName,
  Livestock_Count_Sum:livestockCount,
  Farmers:farmers
});


console.log(newlivestock)

newlivestock.save(function(err){
  if(err) {
    throw err;

  }
res.send(true);
})



})

router.post('/dataDelete',function(req,res,next){
  livestock.findByIdAndRemove({_id:req.body._id},function(err){
    if(err) {throw err};

    res.send(true);
  })
 
})

router.post('/dataUpdate',function(req,res,next){

            

livestock.findById(req.body._id,function(err,foundData){
  let district=req.body.District;
let farmers=req.body.Farmers;
let propertySize=req.body.Property_Size_Ha;
let parishExtensionName=req.body.Parish_Extension_Name;
let parishExtensionCode=req.body.Parish_Extension_Code;
let parishCode=req.body.Parish_Code;
let parish=req.body.Parish;
let locationCode=req.body.Location_Code;
let livestockTypeCode=req.body.Livestock_Type_Code;
let livestockName=req.body.Livestock_Name;
let livestockGroupName=req.body.Livestock_Group_Name;
let livestockGroupCode=req.body.Livestock_Group_Code;
let livestockCount=req.body.Livestock_Count_Sum;
  let updatedData={
    Location_Code:locationCode,
  Property_Size:propertySize,
  Parish_Code:parishCode,
  Parish_Extension_Code:parishExtensionCode,
  District:district,
  Parish:parish,
  Parish_Extension_Name:parishExtensionName,
  Livestock_Name:livestockName,
  Livestock_Type_Code:livestockGroupCode,
  Livestock_Group_Code:livestockGroupCode,
  Livestock_Group_Name:livestockGroupName,
  Livestock_Count_Sum:livestockCount,
  Farmers:farmers
  }

  livestock.findByIdAndUpdate(foundData._id,updatedData,function updatedData(err){
    if(err){throw err;}
    res.send(true);
});
})

            
 
})
module.exports = router;
