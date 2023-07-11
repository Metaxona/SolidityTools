const hre = require("hardhat");

async function main() {
  const ERC20 = await hre.ethers.deployContract("ERC20");

  await ERC20.waitForDeployment();

  console.log(`deployed to ${ERC20.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
