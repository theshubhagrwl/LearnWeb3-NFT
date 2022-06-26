const { ethers } = require("hardhat");

async function main() {
  //1. Tell script we want to deploy 'NFTee.sol' contract
  //getContractFactory is used to link contract before deployment
  const contract = await ethers.getContractFactory("NFTee");

  //2. Deploy
  const deployedContract = await contract.deploy();
  //wait for the deployment to finish
  await deployedContract.deployed();

  //3. Print the address of the deployed contract
  console.log("NFT Contract deploed to: ", deployedContract.address);
}

main()
  .then(() => process.exit(0)) //success exit code is 0
  .catch((error) => {
    console.log(error);
    process.exit(1); //failure exit code is 1
  });
