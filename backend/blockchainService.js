const Web3 = require('web3');
const DIDContract = require('../contracts/DIDContract.json');
const VerifiableCredentialContract = require('../contracts/VerifiableCredentialContract.json');

const web3 = new Web3('http://localhost:8545');
const accounts = await web3.eth.getAccounts();

const didContract = new web3.eth.Contract(DIDContract.abi, '0xYourDIDContractAddress');  // Replace with the actual deployed DIDContract address
const credentialContract = new web3.eth.Contract(VerifiableCredentialContract.abi, '0xYourCredentialContractAddress');  // Replace with the actual deployed VerifiableCredentialContract address

async function registerUser(name, email) {
    const gas = await didContract.methods.registerUser(name, email).estimateGas();
    const result = await didContract.methods.registerUser(name, email).send({ from: accounts[0], gas });
    return result;
}

async function getUserInfo() {
    const userInfo = await didContract.methods.getUserInfo().call({ from: accounts[0] });
    return userInfo;
}

async function issueCredential(credentialType) {
    const gas = await credentialContract.methods.issueCredential(credentialType).estimateGas();
    const result = await credentialContract.methods.issueCredential(credentialType).send({ from: accounts[0], gas });
    return result;
}

async function getVerifiableCredential() {
    const credentialType = await credentialContract.methods.getVerifiableCredential().call({ from: accounts[0] });
    return credentialType;
}

module.exports = {
    registerUser,
    getUserInfo,
    issueCredential,
    getVerifiableCredential,
};