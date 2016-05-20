myApp.controller('dashboardscontroller', function($scope, $routeParams, $location, orderfactory, productfactory, customerfactory){

productfactory.get5Products(function(data){
		$scope.products = data;
	})

	customerfactory.get3Customers(function(data){
		$scope.customers = data;
	})

	orderfactory.get3orders(function(data){
		console.log(data);
		$scope.orders = data;
	})

	
	
	
})