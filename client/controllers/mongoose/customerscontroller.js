myApp.controller('customerscontroller', function($scope, $routeParams, $location, customerfactory){

	$scope.customers = [];
	
	 // $scope.date = new Date();

	customerfactory.getCustomers(function(data){
		$scope.customers = data;
	})

	$scope.addCustomer = function(){

		
		customerfactory.addCustomer($scope.newcustomer, function(data){
			if(data.error) {
				console.log("inside client customer cotorller");
				$scope.error = data.error;
			}
			else{
				$scope.customers = data;
			console.log($scope.customers)
            // $scope.newcustomer = {};
			}
			
		})
	}

	$scope.deleteCustomer = function(customer){
		customerfactory.deleteCustomer(customer, function(data){
			$scope.customers = data;
		})
	}


})