/**
 * FriendController
 *
 * @description :: Server-side logic for managing friends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getfriend:function(req,res){    //我关注的好友,ok
    var param = req.body;
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
  getFans:function(req,res){    //我的fans,同获取好友用friendId传userId,ok
    var param = req.body;
    if(param.friendId){
      Friend.find({
        friendId: param.friendId
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
  addFriend:function(req,res){    //关注好友ok
    var param = req.body;
    if(param.friendId && param.userId){
      Friend.create({
        friendId: param.friendId,
        userId:param.userId
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
};

