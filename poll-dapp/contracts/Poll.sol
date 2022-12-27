// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PollContract{
    struct PollData{
      address poster;
      string question;
      string option1;
      string option2;
      string option3;
      uint option1votes;
      uint option2votes;
      uint option3votes;
    }

   
    
}