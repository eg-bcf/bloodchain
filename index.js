var express = require('express');
var fs = require('fs');

var app = express();

app.use( express.static( "public" ) );
/*
var myCss = {
  style: fs.readFileSync('./styles.css', 'utf-8')
};
*/
app.set('view engine', 'ejs');
/*
app.get('/', function(req, res) {
  res.render('pages/index', {
    myCss: myCss
  });
});
*/
app.get('/', function(req, res) {
  res.render('pages/index');
});


app.listen(8080);
