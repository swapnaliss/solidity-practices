import "./App.css";
import React from "react";
import HomePage from "./components/HomePage"

import Web3 from "web3";

function App(){
  const ethereum = window.ethereum;
  const MyContractJSON = require("./contractjson/PollContract.json");

  const web3 = new Web3(ethereum);     //for connected metamask wallet
  const contraAddress = MyContractJSON.networks["5777"].address;
  const contractAbi = MyContractJSON.abi;

  const myContract = new web3.eth.Contract(contractAbi,contraAddress);

  return(
    <div className="App">
      <HomePage myContract = {myContract}/>
    </div>
  )


}
export default App;
