var express = require('express');
var router = express.Router();

/* GET requests */
router.get('/ttt', function(req, res, next) {
	res.render('index', {login:true});
});

/* POST requests */
router.post('/ttt', function(req, res, next) {
	res.status(200).json({
		message: 'It works!'
	});

	var username = req.body.username;

	console.log(username)
	var login = !(username.length > 0);
	res.render('index', {login});
});

router.post('/adduser', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;

	res.status(200).json({
		status:'OK'
	});
});

router.post('/verify', function(req, res, next) {
	var email = req.body.email;
	var key = req.body.key;

	res.status(200).json({
		status:'OK'
	});
});

router.post('/login', function(req, res, next) {
	res.status(200).json({
		status:'OK'
	});
});

router.post('/logout', function(req, res, next) {
	res.status(200).json({
		status:'OK'
	});
});

router.post('/listgames', function(req, res, next) {
	res.status(200).json({
		status:'OK'
	});
});

router.post('/getgame', function(req, res, next) {
	res.status(200).json({
		status:'OK'
	});
});

router.post('/getscore', function(req, res, next) {
	res.status(200).json({
		status:'OK'
	});
});

module.exports = router;

/*
git add .; git commit -m "commit"; git push
sudo rm -rf warmupProject2; sudo git clone https://github.com/samn334/warmupProject2
*/
