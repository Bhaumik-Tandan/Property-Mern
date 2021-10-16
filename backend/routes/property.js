const router = require('express').Router();
let property = require('../models/property');

router.route('/').post((req, res) => {//add property
  const newProperty= new property(req.body);
  newProperty.save()
    .then(() => res.json('property added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {//get property
  property.find()
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:productId').delete((req, res) => {//get property
    property.findOneAndDelete({productId:req.params.productId}) 
      .then(j => res.json(j))
      .catch(err => res.status(400).json('Error: ' + err));
  });



module.exports = router;