const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("ADD YOUR API KEY")
const contractAddress = "0x795e47574f11055806e294f1b95090cd46ececdd";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}
