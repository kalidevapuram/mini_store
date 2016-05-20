myApp.controller('productscontroller', function($scope, $routeParams, $location, productfactory){

	$scope.products = [];

	productfactory.getProducts(function(data){
		$scope.products = data;
	})

	$scope.addProduct = function(){
		productfactory.addProduct($scope.newproduct, function(data){
			$scope.products = data;
			console.log($scope.products)
            $scope.newproduct = {};
		})
	}

	$scope.editproduct = function(product){
		console.log(product)
		productfactory.editproduct(product, function(data){
			
		})
	}

	
	
})