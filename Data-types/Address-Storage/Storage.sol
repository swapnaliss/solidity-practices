// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract AddressStorage{

    address admin = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
      
      function retrieve() public view returns(address)
      {
          return admin;

      }
}