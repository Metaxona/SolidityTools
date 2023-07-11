const hre = require("hardhat");

async function main() {
  const ERC721 = await hre.ethers.deployContract("SolitityTools721");

  await ERC721.waitForDeployment();

  console.log(`deployed to ${ERC721.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
