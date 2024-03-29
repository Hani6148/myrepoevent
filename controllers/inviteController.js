const db = require("../models");


module.exports = {
    findAll: function(req, res) {
      db.Invitation
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByrId: function(req, res) {
      db.Invitation
        .find({receiver:req.params.rid,invitationstatus:"pending"}).populate("event")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Invitation
        .find({_id:req.params.id}).populate("event sender receiver")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Invitation
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Invitation
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Invitation
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    reject:function(req,res){
      console.log("reject just sent")
      db.Invitation
      .findOneAndUpdate({ _id: req.body.invitationId }, {invitationstatus:"rejected"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
  };
  