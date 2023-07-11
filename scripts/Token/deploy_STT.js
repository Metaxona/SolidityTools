const hre = require("hardhat");

async function main() {
  const STT = await hre.ethers.deployContract("SolidityToolsToken");

  await STT.waitForDeployment();

  console.log(`deployed to ${STT.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
