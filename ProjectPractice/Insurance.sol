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
        mapping(uint => Policy) public policies;
        
        function createPolicy(uint id, string memory name,  string memory farmerName,uint farmerId,
                 uint coveredAmount, uint premiumAmount, uint policyPeriod)public
        {
                  Policy storage policy = policies[id];
                  policy.id = id;
                  policy.name = name;
                   policy.farmerId = farmerId;
                 policy.farmerName = farmerName;
                 policy.coveredAmount  = coveredAmount;
                 policy.premiumAmount = premiumAmount;
                 policy.policyPeriod = policyPeriod;
                
     
        }
}