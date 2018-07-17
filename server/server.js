const express = require('express');

var app = express();

var arr = [{'name':'Rashu', 'age': 27}, {'name':'Tashu', 'age':18}]

app.get('/', (req,res)=>{
	res.status(200).send({
		error: 'Page not found',
		name: 'ToDo App v1.0'
	});
});

app.get('/users', (req,res) => {
	res.status(200).send([{'name':'Rashu', 'age': 27}, {'name':'Tashu', 'age':18}])
})

app.listen(3000);

module.exports.app = app;