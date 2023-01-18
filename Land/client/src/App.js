import './App.css';
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage/>} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;