import '@nomicfoundation/hardhat-chai-matchers';
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();
module.exports = {
  solidity: "^0.8.24",
  networks: {
    // TODO: Add your testnet config here
    arbitrumSepolia: {
      url: `https://arbitrum-sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.ARBITRUM_PRIVATE_KEY!}`]
    },
  },
} as HardhatUserConfig;
