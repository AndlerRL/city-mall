'use client'

import Web3 from 'web3';

let web3;

// Add ethereum to the TS context and declare it as Ethereum object
declare global {
  interface Window {
    ethereum: any;
  }
}

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and MetaMask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running MetaMask
  const provider = new Web3.providers.HttpProvider(
    // https://arbitrum-mainnet.infura.io/v3/${}
    `https://arbitrum-sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
  );
  web3 = new Web3(provider);
}

export default web3;
