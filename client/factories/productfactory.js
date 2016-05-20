myApp.factory('productfactory', function($http){
	var factory = {};
	var products = [];
	

	factory.getProducts = function(callback){
		$http.get('/products').then(function(data){
			console.log(data.data);
			products = data.data;
			callback(data.data);
		});
	}

	factory.addProduct = function(info, callback){
		$http.post('/products', info).then(function(data){
			console.log(data);
			products.push(data.data)
			callback(products);
		})
	}

	factory.get5Products = function(callback){
		$http.get('/5products').then(function(data){
			console.log(data.data);
			products = data.data;
			callback(data.data);
		});
	}

	
	
	

	return factory;
})