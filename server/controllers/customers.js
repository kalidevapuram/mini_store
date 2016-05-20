var mongoose = require('mongoose');
var customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		getCustomers: function(req, res){
			var a = customer.find({}).sort({'date' : -1});
			a.exec(function(err, customers){
				console.log(customers);
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(customers);
				}
			})
		},
		get3Customers: function(req, res){
			var q = customer.find({}).sort({'date' : -1}).limit(3);
			q.exec(function(err, customers){
				console.log(customers);
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(customers);
				}
			})
		},

		addCustomer: function(req, res){
			var newCustomer = new customer(req.body);
			console.log(req.body);
			newCustomer.save(function(err, customer){

				if(err){
					console.log('error in creating customer')
					console.log(customer);
       res.json({message: "Name should contain alpha-numeric characters only", error: "name cannot be blank and it has to be morethan 5 characters and should contain alpha-numeric characters only"})
							
					}else{
					 		res.json(newCustomer);
					 	}
					
						
						 
					})
		},
		destroyCustomer: function(req, res){
			customer.remove({_id: req.params.id}, function(err, result){
				if(err){
					console.log(err);
					console.log('looks like we have an error in destroyCustomer Controller');
				} else {
					res.json(result);
				}
			})
		}, 
	}
})();