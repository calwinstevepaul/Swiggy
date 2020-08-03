var model=require('../models')
let Op=require('sequelize').Op


class getdataController{
   async getRestaurant(){
    return model.user.findAll({
      where: {
        isAdmin:true
      },
      include:[{
        model:model.food
      }]

    })
  }

  async getCurrentUser(id){
    return model.user.findAll({
      where:{
        id:id
      }
    })
  }

  async getCart(id){
    return model.cart.findAll({
      where:{
        userId:id
      },
      include:[{
        model:model.food,
        include:[{
          model:model.user
        }]
      }]
    })
  }


  async getOrders(id){
    return model.order.findAll({
      where:{
        restaurantId:id,
        isPrepared:false,
        isDelivered:false

      },include:[{
        model:model.user
      },{
        model:model.food
      }]
    })
  }

  async getDelivery(id){
    return model.order.findAll({
      where:{
        restaurantId:id,
        isPrepared:true,
        isDelivered:false
      },include:[{
        model:model.user
      },{
        model:model.food
      }]
    })
  }

  async getOrderStatus(id){
    return model.user.findAll({
      where:{
        id:id
      },include:[
        {
          model:model.order,
          include:[{
            model:model.food,
            include:[{
              model:model.user
            }]
          },
         ]          
        }

      ]
    })
  }
  
  
}


module.exports = () => {
    return new getdataController();
  };
  