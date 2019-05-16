var express = require('express');
var logger = require('morgan');
    app = express();

app.use(logger('combined'));

app.get('/', function(req, res){
    res.send('Ola Mundo');
});

app.get('/teste', function(req, res){
    res.send('teste');
});


var server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);



