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

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage/>} ></Route>
        <Route path="/register" element={<NewLand/>}>
        </Route>`
          <Route path="/land/:landId"element={<Auction />}> </Route>
            
         
            
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;