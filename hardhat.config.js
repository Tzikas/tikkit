require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },

  networks: {
    hardhat: {
      // chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    localhost: {
      chainId: 1337, // Chain ID should match the hardhat network's chainid
      // accounts: [`${PRE_FUNDED_PRIVATE_KEY_1}`, `${PRE_FUNDED_PRIVATE_KEY_2}`, `${OTHER_PRIVATE_KEY}`],
      accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`, `0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d`],
      // }
    }
  }

};


