myApp.factory('customerfactory', function($http){
	var factory = {};
	var customers = [];

	

	factory.getCustomers = function(callback){
		$http.get('/customers').then(function(data){
			// console.log(errors);
			customers = data.data;
			callback(data.data);
		});
	}

	factory.addCustomer = function(info, callback){
		$http.post('/customers', info).then(function(data){
			if (data.data.error) {
				console.log("there was an error");
				callback(data.data);
			}
			
			else{
				console.log(data);
				customers.push(data.data)
				callback(customers);
			}
			
		})
	}

	factory.deleteCustomer = function(customer, callback){
		$http.post('/customers/' + customer._id  + '/delete').then(function(data){
			console.log(data);
			customers.splice(customers.indexOf(customer), 1);
			callback(customers);
		})
	}
	factory.get3Customers = function(callback){
		$http.get('/3customers').then(function(data){
			// console.log(errors);
			customers = data.data;
			callback(data.data);
		});
	}
	
	

	return factory;
})