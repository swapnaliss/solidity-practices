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

    mapping(string => PollData) public PollDetails;

    function addNewPoll(string memory PollID, string memory question, string memory option1, 
                           string memory option2,string memory option3)public{
       PollDetails[PollID].poster = msg.sender;
       PollDetails[PollID].question = question;
       PollDetails[PollID].option1  = option1;
       PollDetails[PollID].option2 = option2;
       PollDetails[PollID].option3 = option3;
    }

    function vote(string memory PollID,uint option1,uint option2, uint option3)public{
      PollDetails[PollID].option1votes += option1;
      PollDetails[PollID].option2votes += option2;
      PollDetails[PollID].option3votes += option3;
    }

}