import { useState } from "react";
import './App.css';
import Web3 from 'web3';
import SetString from "./ABI/SetString.json"

function App() {

  const [value, setValue] = useState("");
  const ethereum = window.ethereum;
  const web3 = new Web3(ethereum);

  const contractAddress = SetString.networks["5777"].address;;
  const contractAbi = SetString.abi;

  const myContract = new web3.eth.Contract(contractAbi, contractAddress);

  const getData = async () => {
    const data = await myContract.methods.storedData().call();
    console.log(data)
    setValue(data)
  }
 getData();

  return (
    <div className="App">
      <header className="App-header">
        <p>
         setString dApp
        </p>
      <p>
        String is : {value}
      </p>
      </header>
    </div>
  );
}

export default App;
