/**
 * FriendController
 *
 * @description :: Server-side logic for managing friends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  follow:function(req,res){

    var param = req.body;
    var version = req.body.version;

    if(param.userId && param.friendId){

      Friend.create({userId:param.userId,friendId:param.friendId},function(err,doc){
        res.json({result:true,body:doc});
      });

    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  },
  getfriend:function(req,res){
    var param = req.body;
   //console.log(req.body)
    if(param.userId){
      Friend.find({
        userId: param.userId
              },function(err,doc){

        if(doc){


          res.json({result:true,body:doc});





        } else {
          res.json({result:false,body:{err:"用户数据不存在"}});
        }

      });


    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  },
  getfans:function(req,res){

    var param = req.body;
    //console.log(req.body)
    if(param.friendId){
      Friend.find({
        userId: param.userId
      },function(err,doc){

        if(doc){
          res.json({result:true,body:doc});
        } else {
          res.json({result:false,body:{err:"用户数据不存在"}});
        }

      });


    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  },
  test:function(req,res){
    res.send("Hello");
  },
};

