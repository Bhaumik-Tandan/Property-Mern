const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new Schema({
  productId: {
    type: Number,
    required: true,
    unique:true
  },
  name:{
    type: String,
    required: true,
  },
  cost:{
    type: Number,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});


const Property = mongoose.model('property', propertySchema);

module.exports = Property;