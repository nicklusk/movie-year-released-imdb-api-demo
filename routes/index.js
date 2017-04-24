exports.active = function (app) {

	const imdb = require('imdb-api');
	const bodyParser = require('body-parser');
	let movie = {title: '', year: ''};

	app.get('/',function(req,res){
		res.render('index', { dynamic_textbox: '<input id="query" name="query" type="text" value="" />', movie: movie });
	});

	app.use(bodyParser.urlencoded({
    extended: true
	}));
	app.use(bodyParser.json());

	app.post('/search',function(req,res){
		console.log('req: ' + req.body.query );
		imdb.getReq({ name: req.body.query }, (err, results) => {
				movie = results;
				console.log('movie: ' + movie);
				res.render('index', { dynamic_textbox: '<input id="query" name="query" type="text" value="" />', movie: movie });
		});
	});


};
