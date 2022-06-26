import { expect } from "chai";
import { ethers } from "hardhat";

describe("Deploy CubeswapV2Router02", function () {
  it("deploy CubeswapV2Router02", async function () {
    const addrs = await ethers.getSigners();
    const owner = addrs[0].address;
    const factory = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const weth = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const CubeswapV2Router02= await ethers.getContractFactory("CubeswapV2Router02");
    const router= await CubeswapV2Router02.deploy(factory,weth);
    await router.deployed();

    console.log("CubeswapV2Router02",router.address);
    expect(await router.factory()).to.equal(factory);
    expect(await router.WETH()).to.equal(weth);

  });
});
