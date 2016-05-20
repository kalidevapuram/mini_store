var customersController = require('./../controllers/customers.js')
var ordersController = require('./../controllers/orders.js')
var productsController = require('./../controllers/products.js')


module.exports = function(app){

	app.get('/products', function(req, res){
		productsController.getProducts(req, res);
	});
	app.get('/5products', function(req, res){
		productsController.get5Products(req, res);
	});
	app.post('/products', function(req, res){
		productsController.addProduct(req, res);
	});

	app.get('/customers', function(req, res){
		customersController.getCustomers(req, res);
	});
	app.get('/3customers', function(req, res){
		customersController.get3Customers(req, res);
	});
	app.post('/customers', function(req, res){
		customersController.addCustomer(req, res);
	});

	app.post('/customers/:id/delete', function(req, res){
		console.log('im getting the route');
		customersController.destroyCustomer(req, res);
	});

	app.post('/orders', function(req, res){
		ordersController.addorder(req, res);
	});

	app.get('/orders', function(req, res){
		ordersController.getorders(req, res);
	});
	app.get('/3orders', function(req, res){
		ordersController.get3orders(req, res);
	});

	
}