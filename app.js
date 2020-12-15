
const https = require('https');
const config = require('config');
const port = config.get('app.port');
const express = require('express');
const fs = require('fs');
const app = express();
const api = require('./routes/api');
const adm = require('./routes/adm');
const owner = require('./routes/owner');



app.set('views', './views');
app.set('view engine', 'ejs');
app.use("/api", api);
app.use("/adm", adm);
app.use("/", owner);
app.use( "/public",express.static('./public') );
app.use( "/.well-known/pki-validation/",express.static('./ssl') );

app.all("*", (req, res, next) => {
  let host = req.headers.host;
  host = host.replace(/\:\d+$/, ''); // Remove port number
  res.redirect(307, `https://${host}${req.path}`);
});

app.listen(port, function() {
  console.log('Listen on port ' + port);

});

var privateKey  = fs.readFileSync(__dirname + '/ssl/private.key');
var ca  = fs.readFileSync(__dirname + '/ssl/ca_bundle.crt');
var certificate = fs.readFileSync(__dirname + '/ssl/certificate.crt');
var credentials = { key: privateKey,ca: ca, cert: certificate };
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(443,()=>{
  console.log('Listen on port 443');
});
/*
var Jieba = require('node-jieba');

var analyzer = Jieba({
    debug: true
  });
  analyzer.cut('带分割文本',function(mia,output){
    console.log(output);
});

*/