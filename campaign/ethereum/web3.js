import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable()

} else {
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/4fa597b8c1a74f49bfc6a9e142e56b87'
    );
    web3 = new Web3(provider);
}

export default web3;