// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

    const factory = '0x7FF245a52d46f79fcD80ff3C83229B82f6Ba847f';
    const weth = '0xB9164670A2F388D835B868b3D0D441fa1bE5bb00';
    const CapswapV2Router02= await ethers.getContractFactory("CapswapV2Router02");
    const router= await CapswapV2Router02.deploy(factory,weth);
    await router.deployed();

  console.log("CapswapV2Router02 deployed to:", router.address);
  console.log("factory",await router.factory());
  console.log("WETH",await router.WETH());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
