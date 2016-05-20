myApp.factory('orderfactory', function($http){
	var factory = {};
	orders = [];

	factory.addorder = function(info, callback){
		console.log(info)
		$http.post('/orders', info).then(function(data){
			// console.log(errors);
			console.log(data);
			orders.push(data.data)
			callback(orders);
		})
	}


	factory.getorders = function(callback){
		$http.get('/orders').then(function(data){
			 console.log(data);
			orders = data.data;
			callback(data.data);
		});
	}

	factory.get3orders = function(callback){
		$http.get('/3orders').then(function(data){
			 console.log(data);
			orders = data.data;
			callback(data.data);
		});
	}

	return factory;
})