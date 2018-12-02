var path = require('path');
var home = require('../controllers/homeController.js');

module.exports = function(app) {
	//route
	app.post('/registerUser', function(req, res) {
		//step 5 and 6
		console.log("in the routes") //note: this will log in express terminal NOT in the browser console
		home.registerUser(req, res);
	});
	app.post('/loginUser', function(req, res) {
		// console.log("logging in from routes");
		home.loginUser(req, res);
	});
	app.get('/checkSession', function(req, res) {
		home.checkSession(req, res);
	});
	app.get('/logout', function(req, res) {
		home.logout(req, res);
	});

	app.post('/addNote', function(req, res) {
		console.log('adding notes made it routes');
		home.addNote(req, res);
	});
	app.get('/findAll', function(req, res) {
		// console.log("found all from routes");
		home.findAll(req, res);
	});
	app.delete('/delete/:id', function(req, res) {
		console.log('deleting from routes');
		home.delete(req, res);
	});
};
