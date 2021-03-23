// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';

contract WarhammerAsset is ERC721 {
  using Counters for Counters.Counter;

  Counters.Counter private _tokenCounter;

  constructor() ERC721('WarhammerAsset', 'HK') {}

  function create(address owner, string memory tokenURI) public {
    _tokenCounter.increment();
    uint256 tokenId = _tokenCounter.current();

    _safeMint(owner, tokenId);
    _setTokenURI(tokenId, tokenURI);
  }

  function transferAsset(
    address from,
    address to,
    uint256 tokenId
  ) public {
    transferFrom(from, to, tokenId);
  }

  function getOwner(uint256 tokenId) public view returns (address) {
    return ownerOf(tokenId);
  }
}
