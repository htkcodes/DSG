const express = require('express');
const router = new express.Router();
const livestock=require('../models/livestock');
const async=require('async');



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

router.get('/chart',function(req,res,next){
async.parallel({
  jlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"ST.JAMES"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  jfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'ST.JAMES'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  cclivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"CLARENDON"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  ccfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'CLARENDON'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  elivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"ST.ELIZABETH"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  efarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'ST.ELIZABETH'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  plivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"PORTLAND"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  pfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'PORTLAND'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  mlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"ST.MARY"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  mfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'ST.MARY'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  tlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"ST.THOMAS"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  tfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'ST.THOMAS'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  trlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"TRELAWNY"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  trfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'TRELAWNY'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  wlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"WESTMORELAND"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  wfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'WESTMORELAND'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  clivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"ST.CATHERINE"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  cfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'ST.CATHERINE'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  annlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"ST.ANN"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  annfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'ST.ANN'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  andrewlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"ST.ANDREW"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  andrewfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'ST.ANDREW'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  manlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"MANCHESTER"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  manfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'MANCHESTER'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  hanlivestockCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":"HANOVER"}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Livestock_Count_Sum"}
      }},
    ],callback)
  },
  hanfarmersCount:function(callback){
    livestock.aggregate([
      {"$match":{"Parish":'HANOVER'}},
      {"$group":{
        "_id":null,
        "total":{"$sum":"$Farmers"}
      }},
    ],callback)
  },
  
},function(err,results){

  if(err) throw err;
  res.render('chart',{results:results})
})
})
module.exports = router;
