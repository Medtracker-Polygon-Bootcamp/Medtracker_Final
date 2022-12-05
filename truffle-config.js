require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();  
const path = require("path");
const ALCHEMY_API_KEY = process.env

module.exports = {
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200  
        }
      }
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // match any network
      websockets: true
    },
    matic: {
      provider: () => new HDWalletProvider(ALCHEMY_API_KEY, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true, 
      networkCheckTimeout: 100000, 
    }

  }
  
};
