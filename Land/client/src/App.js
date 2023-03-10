import './App.css';
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewLand from './components/NewLand';
import Auction from './components/Auction';
import Web3 from "web3"; //imported web 3 library which is installed

const ethereum = window.ethereum;  //object can be used to establish the connection between the decentralized application and MetaMask

const MyContractJSON = require("../src/contractJSON/LandSale.json"); // load the artifact file of the deployed contract 
// console.log("MyContractJSON");

const contractAddress = MyContractJSON.networks["5777"].address; // get the deployed contract address from MyContractJSON


const contractAbi = MyContractJSON.abi; //get the ABI from the artifact file

const web3 = new Web3(ethereum); //Connect the web3 to the MetaMask wallet using the ethereum object


const myContract = new web3.eth.Contract(contractAbi , contractAddress);  //create the smart contract object.

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage myContract={myContract}/>} ></Route>
        <Route path="/register" element={<NewLand  myContract={myContract} web3={web3}/>}>
        </Route>`
          <Route path="/land/:landId"element={<Auction myContract={myContract} web3={web3}/>}> </Route>
            
         
            
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;