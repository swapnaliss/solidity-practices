// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract Int_example {
    int number;

    function storePositive() public{
        number = 1234;

    }
    function storeNegative() public{
        number =  -1234;
    }

    function retrieve() public view returns (int256){
        return number;
    }
}