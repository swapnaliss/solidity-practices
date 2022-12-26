// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract Storage{

    bool stateValue;
     
     function store (bool data) public{
         stateValue = data;

     }
     function retrieve() public view returns(bool){
         return stateValue;
     }
}