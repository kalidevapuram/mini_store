var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var Schema = mongoose.Schema;


var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    error: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];



var CustomerSchema = new mongoose.Schema({
    customer_name: {type: String, required: true, validate: nameValidator},
     date: {type:Date, default:Date.now}
   
    
});

mongoose.model('Customer', CustomerSchema);




