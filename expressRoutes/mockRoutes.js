// mockRoutes.js

var express = require('express');
var mockRoutes = express.Router();

// Require Item model in our routes module
var Mock = require('../models/Mock');

// Defined store route
mockRoutes.route('/add').post(function (req, res) {
  var mock = new Mock(req.body);
  mock.save()
    .then(item => {
    res.status(200).json({'mock': 'Coin added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
mockRoutes.route('/').get(function (req, res) {
  Mock.find(function (err, mocks){
    if(err){
      console.log(err);
    }
    else {
      res.json(mocks);
    }
  });
});

// Defined edit route
mockRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Mock.findById(id, function (err, mock){
      res.json(mock);
  });
});

//  Defined update route
mockRoutes.route('/update/:id').post(function (req, res) {
  Mock.findById(req.params.id, function(err, mock) {
    if (!mock)
      return next(new Error('Could not load Document'));
    else {
      mock.name = req.body.name;
      mock.price = req.body.price;
      mock.description  = req.body.description ;
      mock.image  = req.body.image ;
      mock.currency  = req.body.currency ;
      mock.link   = req.body.link  ;
      
      mock.save().then(mock => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
mockRoutes.route('/delete/:id').get(function (req, res) {
  Mock.findByIdAndRemove({_id: req.params.id}, function(err, mock){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = mockRoutes;
