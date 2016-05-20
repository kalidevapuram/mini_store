var mongoose = require('mongoose');
var order = mongoose.model('Order');
var product = mongoose.model('Product');

module.exports = (function() {
	return {
		addorder: function(req, res){

			

			var name_qty_arr = req.body.description.split(",");
			console.log(req.body);
			req.body.description = name_qty_arr[0];
			console.log(req.body);
			var old_quantity = parseInt(name_qty_arr[1]);
			var new_quantity = old_quantity - req.body.quantity;
			var new_order = new order(req.body);
			if (req.body.quantity > old_quantity){
				res.json({message:"Quantity error. Not enough product in stock.", errors:"quantity error"})
			}else{
				new_order.save(function(err, order){
				if(err){
					console.log(err);
					res.json(err)
				} 
				else {
					
						product.findOneAndUpdate({description: req.body.description}, {quantity: new_quantity}, function(err,productq){
							if(err){
								console.log(err);
							} else {
								console.log(productq);
							}
						});
						res.json(new_order);
					
						
				}
			})
			}
			
		},


		getorders: function(req, res){
			order.find({}, function(err, orders){
				// console.log(orders);
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(orders);
				}
			})
		},
		
		get3orders: function(req, res){
			var q = order.find({}).sort({'date' : -1}).limit(3);
			q.exec(function(err, orders){
				console.log(order);
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(orders);
				}
			})
		},
	}
})();