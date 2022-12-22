// SPDX-License-Identifier: MIT

pragma solidity >=0.4.16;

contract Storage {
    uint public storedData; 
    function set(uint x) public{
        // x  = 2;
        storedData = x;
        // storedData = 2;
    }

    function get()public view returns (uint){
        return storedData;
    }
    
}