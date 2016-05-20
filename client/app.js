var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider

			.when('/', 
			{
				controller: 'dashboardscontroller',
				templateUrl: "partials/mongoose/dashboard.html"
			})

			.when('/customers', 
			{
				controller: 'customerscontroller',
				templateUrl: "partials/mongoose/customer.html"
			})
			.when('/orders',{

				controller: 'orderscontroller', 
				templateUrl: "partials/mongoose/order.html"
			})

			.when('/products',{
				controller: 'productscontroller',
				templateUrl: "partials/mongoose/product.html"
			})
			
			.otherwise({
				redirectTo: "/"
			})
	})
}());