'use strict'

var express=require('express');
var router=express.Router();
var route
router.get('/',function(req,res){
    
    res.render('./views/index')
});

module.exports=router;