const express = require('express');
const port = 3001 || process.env.PORT;
const morgan=require('morgan');
const wallet = require('ethereumjs-wallet');
// const Web3 = require('web3');
// const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser({limit: '50mb'}));
// parse application/json
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', express.static("src"));

app.post('/createWallet',(req,res)=>{
    
  var generateWallet = wallet.generate();
  var privateKey = generateWallet.getPrivateKeyString();
  privateKey=privateKey.substring(2);
  var walletAddr = '0x' + generateWallet.getAddress().toString('hex');
  
  res.send({
    add:walletAddr,
    key:privateKey
  });

});

app.post('/send',(req,res)=>{
  
  res.send({
    num:10,
    A:A,
    B:B
  });

});

app.post('/recieve',(req,res)=>{

  var C=req.body;
  console.log(C);
  res.send().status(200);
});


var N=1000;
var RANGE=1000;
//create matrix
var A=new Array(N);
for(var i=0 ; i<N ; i++)
{
  A[i]=new Array(N);
}
var B=new Array(N);
for(var i=0 ; i<N ; i++)
{
  B[i]=new Array(N);
}
//generate random data

for(var i=0 ; i<N ; i++)
{
  for(var j=0; j<N ; j++)
  {
    A[i][j]=Math.floor((Math.random()*RANGE) + 1);
  }
}
for(var i=0 ; i<N ; i++)
{
  for(var j=0; j<N ; j++)
  {
    B[i][j]=Math.floor((Math.random()*RANGE) + 1);
  }
}



app.listen(port, () => {

  console.log("Express Listening at http://localhost:" + port);

});
