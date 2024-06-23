'use client'

import web3 from '.';

const address = '0xabcdefghjklmnopqrstuvwxyz...';
const abi = [ /* ABI from your compiled contract */];

const contract = new web3.eth.Contract(abi, address);

export default contract;
