import { ethers } from 'hardhat';

async function main() {
  const factory = await ethers.getContractFactory('WarhammerAsset');
  const warhammerAsset = await factory.deploy();
  await warhammerAsset.deployed();
  console.log('\nYour contract was deployed to:', warhammerAsset.address);
}

main()
  .then(() => process.exit())
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
