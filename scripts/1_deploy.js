async function main() {
 //fetch the contract to deploy
 const Token = await ethers.getContractFactory("Token")

    //deploy the contract
 const token = await Token.deploy(`GhostRogue`, `GSTRG`, 1000000000)
 await token.deployed()
 console.log(`Token deployed to: ${token.address}`)
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
