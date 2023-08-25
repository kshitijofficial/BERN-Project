const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("ADD YOUR API KEY")
const contractAddress = "ADD YOUR TASK CONTRACT ADDRESS";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}
