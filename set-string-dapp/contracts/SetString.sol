// SPDX-License-Identifier: MIT

pragma solidity >=0.4.16;

contract SetString {
    string public storedData;

    function store(string memory data) public{
        
        storedData = data;
        
    }
    
}