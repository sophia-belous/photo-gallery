var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 1010));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname + 'json')));

app.set('views', __dirname + '/app/pages');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
    response.render('index');
});

app.all('/*', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
