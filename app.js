const config = require('config');
const port = config.get('app.port');
const express = require('express');
const app = express();
const api = require('./routes/api');
//const adm = require('./routes/adm');
const owner = require('./routes/owner');

app.listen(port, function() {
    console.log('Listen on port ' + port);

});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use("/api", api);
//app.use("/adm", adm);
app.use("/", owner);
app.use( "/public",express.static('./public') );

/*
var Jieba = require('node-jieba');

var analyzer = Jieba({
    debug: true
  });
  analyzer.cut('带分割文本',function(mia,output){
    console.log(output);
});

*/