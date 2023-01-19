import './App.css';
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewLand from './components/NewLand';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage/>} ></Route>
        <Route path="/register" element={<NewLand/>}>
            
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;