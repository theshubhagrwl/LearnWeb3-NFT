//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//contract NFTee is an 'ERC721' contract
contract NFTee is ERC721 {
    constructor() ERC721("LearnWeb3's NFT", "LEARN-NFT") {
        //mint 5 NFT
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }
}
