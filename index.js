
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlEncodedParser = bodyParser.urlencoded({ extended: false});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.post('/pages/postage-results.ejs',urlEncodedParser, function(req,res){
  console.log(req.body);
  var data = req.body;
  var mt = data.mailType;
  var wt = Number(data.weight);
  var result = '';
  if(mt == 1){
    var mailType = "Letters (Stamped)";
  }
  if(mt == 1 && wt <= 1 ){
    result = "$ 0.50";
  }
    if(mt == 1 && wt <= 2 && wt > 1 ){
        result = "$ 0.71";
    }
    if(mt == 1 && wt <= 3 && wt > 2 ){
        result = "$ 0.92";
    }
    if(mt == 1 && wt <= 3.5 && wt > 3 ){
        result = "$ 1.13";
    }
    if(mt == 1 && wt > 3.5){
      result = "NOT AVAILABLE - your letter must be delivered as 'large envelope'";
    }
    if(mt == 2){
    var mailType ="Letters (Metered)";
    }
    if(mt == 2 && wt <= 1 ){
        result = "$ 0.47";
    }
    if(mt == 2 && wt <= 2 && wt > 1 ){
        result = "$ 0.68";
    }
    if(mt == 2 && wt <= 3 && wt > 2 ){
        result = "$ 0.89";
    }
    if(mt == 2 && wt <= 3.5 && wt > 3 ){
        result = "$ 1.10";
    }
    if(mt == 2 && wt > 3.5){
        result = "NOT AVAILABLE - your letter must be delivered as 'large envelope'";
    }
    if(mt == 3){
    var mailType = "Large Envelope (flat)";
    }
    if(mt == 3 && wt <= 1 ){
        result = "$ 1.00";
    }
    if(mt == 3 && wt <= 2 && wt > 1 ){
        result = "$ 1.21";
    }
    if(mt == 3 && wt <= 3 && wt > 2 ){
        result = "$ 1.42";
    }
    if(mt == 3 && wt <= 4 && wt > 3 ){
        result = "$ 1.63";
    }
    if(mt == 3 && wt <= 5 && wt > 4 ){
        result = "$ 1.84";
    }
    if(mt == 3 && wt <= 6 && wt > 5 ){
        result = "$ 2.05";
    }
    if(mt == 3 && wt <= 7 && wt > 6 ){
        result = "$ 2.26";
    }
    if(mt == 3 && wt <= 8 && wt > 7 ){
        result = "$ 2.47";
    }
    if(mt == 3 && wt <= 9 && wt > 8){
        result = "$ 2.68";
    }
    if(mt == 3 && wt <= 10 && wt > 9 ){
        result = "$ 2.89";
    }
    if(mt == 3 && wt <= 11 && wt > 10 ){
        result = "$ 3.10";
    }
    if(mt == 3 && wt <= 12 && wt >11 ){
        result = "$ 3.31";
    }
    if(mt == 3 && wt < 13 && wt > 12 ){
        result = "$ 3.52";
    }
    if(mt == 4){
        var mailType = "First-Class Package Service—Retail";
    }
    if(mt == 4 && wt <= 4 ){
        result = "$ 3.50";
    }
    if(mt == 4 && wt <=8 && wt > 4 ){
        result = "$ 3.75";
    }
    if(mt == 4 && wt <= 9 && wt > 8){
        result = "$ 4.10";
    }
    if(mt == 4 && wt <= 10 && wt > 9 ){
        result = "$ 4.45";
    }
    if(mt == 4 && wt <= 11 && wt > 10 ){
        result = "$ 4.80";
    }
    if(mt == 4 && wt <= 12 && wt >11 ){
        result = "$ 5.15";
    }
    if(mt == 4 && wt < 13 && wt > 12 ){
        result = "$ 5.50";
    }




    console.log('result = ' + result + mt + wt);
  res.render('pages/postage-results', {data: req.body, result, mailType});

})

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

