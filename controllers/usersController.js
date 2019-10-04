const db = require("../models");


module.exports = {
    findAll: function(req, res) {
      console.log("hani")
      db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.User
        .findById(req.params.id).populate({path:"eventsParticipation",options: { sort: { "_id": -1 } },populate:{path:"participant"}} )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
       addhost:function(req,res){
        db.User.findOneAndUpdate({_id:req.body.userId},{$push: { eventsParticipation: req.body.eventId}},{ new: true })
        .then(dbModel=>db.Event.findOneAndUpdate({_id:req.body.eventId},{$push: { participant: req.body.userId}},{ new: true }))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
       },
     



    addEvent:function(req,res){
      db.Invitation
      .findOneAndUpdate({ _id: req.body.invitationId }, {invitationstatus:"accepted"})
      .then(dbModel=> db.User.findOneAndUpdate({_id:req.body.userId},{$push: { eventsParticipation: req.body.eventId}},{ new: true }))
      .then(dbModel=> db.Event.findOneAndUpdate({_id:req.body.eventId},{$push: { participant: req.body.userId}},{ new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
      
      
      },


    update: function(req, res) {
      db.User
        .findOneAndUpdate({ _id: req.params.id }, )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  