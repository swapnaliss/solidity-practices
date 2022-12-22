import { useState } from 'react';
import './App.css';
import Web3 from "web3";
import Storage from "./ABI/Storage.json";

function App() {
  const [value, setValue] = useState("")
const ethereum = window.ethereum;
const web3 = new Web3(ethereum);

const contractAddress = Storage.networks["5777"].address;
const contractAbi = Storage.abi ;


const myContract = new web3.eth.Contract(contractAbi , contractAddress);


const getData = async () => {
const data = await myContract.methods.storedData().call();
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
