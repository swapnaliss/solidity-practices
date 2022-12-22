import { useState } from 'react';
import './App.css';
import Web3 from "web3";
import NewStorage from "./ABI2/NewStorage.json";

function App() {
  const [value, setValue] = useState("")
const ethereum = window.ethereum;
const web3 = new Web3(ethereum);

const contractAddress = "0x612216951Dd3cAEf18ee814863854A186751AD29";
const contractAbi = NewStorage.abi ;


const myContract = new web3.eth.Contract(contractAbi , contractAddress);


const getData = async () => {
const data = await myContract.methods.balance().call();
console.log(data);
setValue(data)

}
getData();

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Storage dApp
        </p>
        <p>
          stored Data : {value}
        </p>
        
      </header>
    </div>
  );
}

export default App;
