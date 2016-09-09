let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();
let visits = new Map();


app.use('/', express.static('public'));
app.use(parser.json());
app.use(technologger);


app.post('/users', (req, res) => {
	let data = req.body;
	
    // TODO: вернуть количество обращений
	let email = data["email"];
	if(visits[email]) 
		visits[email]++;
	else
		visits[email] = 1;
	
	res.send(visits[email].toString());
});


app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
