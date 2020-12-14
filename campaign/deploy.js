const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'burden robot begin urban target federal frozen version master mix clump unhappy',
    'https://goerli.infura.io/v3/4fa597b8c1a74f49bfc6a9e142e56b87'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode }) // add 0x bytecode
        .send({ from: accounts[0] }); // remove 'gas'

    console.log('Contract deployed to', result.options.address);
    console.log(interface);
}


deploy();
