import { expect } from 'chai';
import { ethers } from 'hardhat';
import { WarhammerAsset } from '../typechain/WarhammerAsset';

describe('WarhammerAsset', () => {
  it('Should create a new asset', async () => {
    try {
      const signers = await ethers.getSigners();
      const WarhammerAssetFactory = await ethers.getContractFactory('WarhammerAsset');
      const warhammerAsset = (await WarhammerAssetFactory.deploy()) as WarhammerAsset;
      await warhammerAsset.create(signers[0].address, 'uri');

      expect(await warhammerAsset.getOwner(1)).to.be.equal(signers[0].address);
    } catch (error) {
      throw error;
    }
  });

  it('Should transfer token ownership to another address', async () => {
    const signers = await ethers.getSigners();
    const WarhammerAssetFactory = await ethers.getContractFactory('WarhammerAsset');
    const warhammerAsset = (await WarhammerAssetFactory.deploy()) as WarhammerAsset;

    const from = signers[0].address;
    const to = signers[1].address;

    await warhammerAsset.create(from, 'uri');
    const token = await warhammerAsset.tokenOfOwnerByIndex(from, 0);
    expect(await warhammerAsset.getOwner(token)).to.be.equal(from);

    await warhammerAsset.transferAsset(from, to, token);
    expect(await warhammerAsset.getOwner(token)).to.be.equal(to);
  });
});
