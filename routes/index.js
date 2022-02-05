var express = require('express');
var router = express.Router();
let fs = require('fs');
let date = new Date().toString();


fs.writeFileSync(`sample.txt`,`Current timestamp = ${date}`,(err)=>{
  if(err){
      console.log(err);
  }
})

router.get('/',(req,res)=>{
  fs.readFile("sample.txt","utf-8",(err,data)=>{
      if(err){
          console.log(err);
      }else{
          res.send(data)
      }
  })
})
module.exports = router;
