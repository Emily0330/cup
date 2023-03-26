const express = require('express')
const app = express()
const Web3 = require("web3");
const port = 3000
const fs = require('fs');//to read the file
const path = require('path');
const bodyParser = require("body-parser");//parse the body as json-formatted
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); //後端的URL
const web3 = new Web3('https://goerli.infura.io/v3/f1c999036e8b4d2b93e5984c7e0ef4f4');
const TOKEN_CONTRACT_ADDRESS = "0xD1723BDB1bd1a6e75f84e08444bdf107Cf9c90E0";
const abiFile = fs.readFileSync(path.join(__dirname, 'abi', 'SmartConABI.json'));
const abiFilePath = path.join(__dirname, 'abi', 'SmartConABI.json');

const ABI = JSON.parse(abiFile);//告訴program要用json格式來看abi

app.get('/api',(req,res)=>{
    res.send('API Page')
})
// add middleware to parse request body
app.use(bodyParser.json());
const contract = new web3.eth.Contract(ABI, TOKEN_CONTRACT_ADDRESS);// create a contract instance using your token contract ABI and address
//above are for testing
app.post('/api', async (req, res) => { //app.post("/mint", requireAuth, async (req, res) => {
	try {
    	console.log("success!"); // 輸出 { name: 'John', age: 30 }
    	//res.send('已接收到資料')
    	//大組長傳的那段
		// this is one of the other ways to sign a transaction on your end
		web3.eth.accounts.wallet.add("ead562e2e81d1316f45d3a8028fa5b05d3f078bfdcbdd974b57d225f6b1691d0");
		//above are for testing
		//檢查to是地址/amount是數字(if,try,catch)throw error
		const { to, amount } = req.body; // get the "to" address and "amount" from the request body
    	console.log('請求的body:'+req.body.to);//testing
		const result = await contract.methods
			.mint(to, amount)
			.send({ from: "0xbe804512d5128516cD95b0c6610a7881cfDdD062" , gas: 200000}); // use the contract method to mint the token //mint tokens from this account
		res.status(200).send(
			`Token minted with transaction hash: ${result.transactionHash}`
      		//`Token minted with transaction hash: success!!`//for testing
		);
		console.log(`Token minted with transaction hash: ${result.transactionHash}`);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error while minting token");
	}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})