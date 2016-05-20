
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({

    customer_name: String,
     date: {type:Date, default:Date.now},
     quantity: Number,
     description: String

    
});

mongoose.model('Order', OrderSchema);
