import './App.css';
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewLand from './components/NewLand';
import Auction from './components/Auction';


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