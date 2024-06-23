// app/components/OnchainHub.jsx
'use client';

import { useState } from 'react';

const OnchainHub = ({ data }) => {
  const [blockchainData, setBlockchainData] = useState(data);
  const [input, setInput] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    // const accounts = await web3.eth.getAccounts();
    // await contract.methods.set(input).send({ from: accounts[0] });
    // const newData = await contract.methods.get().call();
    setBlockchainData('hello world!');
  };

  return (
    <div>
      <h2>Blockchain Data: {blockchainData} </h2>
      <form onSubmit={onSubmit} >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" > Submit </button>
      </form>
    </div>
  );
};

export default OnchainHub;
