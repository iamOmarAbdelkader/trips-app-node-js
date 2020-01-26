var express = require('express');
var router = express.Router();
var Trip   = require('../models').Trip;
var Agency   = require('../models').Agency;
var Op = require('Sequelize').Op


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/list'); 
});

/* GET list. */
router.get('/list', function(req, res, next) {
  Trip.findAll({include: [
    { model: Agency, required: true }
      ],}).then((trips)=>{
        
      res.status(200).send(trips);
  });
 
});



/* GET detail. */
router.get('/detail/:id(\[0-9]+\)',async function(req, res, next) {

  let trip =  await Trip.findByPk(req.params['id'],{include: [
    { model: Agency, required: true }
  ]})

    if(trip === null){
      res.send(404,{msg:'trip not found'});
    }  

    res.status(200).send(trip);
});

/* GET home page. */
router.post('/search', function(req, res, next) {
    let condition ={where: { 
      [Op.or]: [ 
      { 
        hotel: {
          [Op.like]: `%${req.query.searchQuery}%`
          },
        },
      { 
        city: {
          [Op.like]: `%${req.query.searchQuery}%`
          }
      },
    ]
    },
    include: [
      { model: Agency, required: true }
    ]
  };


  Trip.findAll(condition).then((trips)=>{
      res.status(200).send(trips);
      
  });

});

module.exports = router;