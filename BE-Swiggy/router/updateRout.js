const router = require("express").Router();
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')
const multer=require('multer');
const path = require("path")

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb){
    cb(null,"AUDIO-" + Date.now() + path.extname(file.originalname));
    
   
  }
});

const upload = multer({
  storage: storage
});


class update {

  constructor(updatecontroller) {
    this.controller = updatecontroller
    this.init();
  }

  init() {
    router.post("/food",middleware,(req, res) => {
      const { foodName,ingredients,price,category} = req.body;
      const userId = req.user
      

      this.controller.food(userId,foodName,ingredients,price,category).then(result=>{
        res.send(result)
      })
    })

    router.post("/addtocart",middleware,(req, res) => {
      const {foodId} = req.body;
      const userId = req.user      

      this.controller.addtocart(userId,foodId).then(result=>{
        res.send(result)
      })
    })
    

    router.post("/removefromcart",middleware,(req, res) => {
      const {id} = req.body;
      const userId = req.user      

      this.controller.removeFromCart(userId,id).then(result=>{
        res.send(result)
      })
    })



    router.post("/order",middleware,(req, res) => {
      const { foodId,restaurantId} = req.body;
      const userId = req.user      
      console.log(userId,foodId,restaurantId)

      this.controller.order(userId,foodId,restaurantId).then(result=>{
        res.send(result)
      })
    })


    router.post("/prepared",middleware,(req, res) => {
      const {id} = req.body;

      this.controller.isPrepared(id).then(result=>{
        res.send(result)
      })
    })

    router.post("/delivered",middleware,(req, res) => {
      const {id} = req.body;

      this.controller.isDelivered(id).then(result=>{
        res.send(result)
      })
    })


  }

  getRouter() {
    return router;
  }
  }
  
  module.exports = controller => {
    return new update(controller);
  };
  