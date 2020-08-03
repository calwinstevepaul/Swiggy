var model=require('../models')


class updateController{
  async food (userId,foodName,ingredients,price,category){
    return model.food.create({
      userId:userId,
      foodName:foodName,
      ingredients:ingredients,
      price:price,
      category:category,
      isAvailable:true
    })
  }


  async addtocart(userId,foodId){
    return model.cart.create({
      userId:userId,
      foodId:foodId
    })
  }

  async removeFromCart(userId,id){
    await model.cart.destroy({
      where:{
        id:id,
        userId:userId
      }
    })
    let x = {status:true}
    return x
  }

  async order(userId,foodId,restaurantId){
    return model.order.create({
      userId:userId,
      foodId:foodId,
      restaurantId:restaurantId,
      isPrepared:false,
      isDelivered:false
    })
  }

  async isPrepared(id){
    return model.order.update({
      isPrepared:true
    },{
      where:{
        id:id
      }
    })
  }

  async isDelivered(id){
    return model.order.update({
      isDelivered:true
    },{
      where:{
        id:id
      }
    })
  }
  

 
}


module.exports = () => {
    return new updateController();
  };
   