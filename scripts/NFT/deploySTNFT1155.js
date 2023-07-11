const hre = require("hardhat");

async function main() {
  const ERC1155 = await hre.ethers.deployContract("SolitityTools1155");

  await ERC1155.waitForDeployment();

  console.log(`deployed to ${ERC1155.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
