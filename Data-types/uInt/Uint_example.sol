// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
contract Uint_example{

    uint256 number;

    function store () public {
        number = 1234;
    }

    function retrieve() public view returns (uint256){
        return number;
    }
}