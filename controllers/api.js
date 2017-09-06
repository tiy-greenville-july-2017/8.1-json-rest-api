var models = require('../models');

var ApiController = {
  list: function(req, res){
    models.Person.findAll().then(function(people){
      res.json(people);
    });
  },
  detail: function(req, res){
    var personId = parseInt(req.params.id);

    models.Person.findById(personId).then(function(person){
      res.json(person);
    });
  },
  create: function(req, res){
    models.Person.create(req.body).then(function(person){
      res.json(person);
    }).catch(function(err){
      console.log(err);
    });
  },
  update: function(req, res){

  },
  delete: function(req, res){

  },
};


module.exports = ApiController;
