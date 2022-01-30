const { ethers } = require("hardhat");

async function main() {

    //factory for instancesof our GameItem contract

    const nftContractFactory = await ethers.getContractFactory("GameItem");

    //here we deploy the contract
    const deployedNFTContract = await nftContractFactory.deploy();

    console.log("NFT Contract Adress:", deployedNFTContract.address);
}

main()
.then(()=> process.exit(0))
.catch((err) => {
    console.log(err);
    process.exit(1)
})