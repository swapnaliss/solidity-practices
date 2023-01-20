import './App.css';
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewLand from './components/NewLand';
import Auction from './components/Auction';
import Web3 from "web3"; //imported web 3 library which is installed

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