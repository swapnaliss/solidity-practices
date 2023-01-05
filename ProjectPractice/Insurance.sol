// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract CropInsurance {
    struct Policy{
        uint id;
        string name;
        uint farmerId;
        string farmerName;
        uint coveredAmount;
        uint premiumAmount;
        uint policyPeriod;
        
        }
}