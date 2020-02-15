const express = require('express');
const port = 3008 || process.env.PORT;
const morgan=require('morgan');
const wallet = require('ethereumjs-wallet');
// const Web3 = require('web3');
// const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

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


app.listen(port, () => {

  console.log("Express Listening at http://localhost:" + port);

});
