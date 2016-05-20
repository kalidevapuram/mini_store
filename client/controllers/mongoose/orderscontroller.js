myApp.controller('orderscontroller', function($scope, $routeParams, $location, orderfactory, customerfactory, productfactory){


	$scope.orders = []

	productfactory.getProducts(function(data){
		$scope.products = data;
	})

	customerfactory.getCustomers(function(data){
		$scope.customers = data;
	})

	

	$scope.addorder = function(new_order){
		console.log(new_order);
		orderfactory.addorder(new_order, function(data){
			$scope.orders = data;
			console.log($scope.orders)
            $scope.neworder = {};
		})
	}

	orderfactory.getorders(function(data){
		console.log(data);
		$scope.orders = data;
	})


	
	
	
})