
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";
import Inventory from './pages/Inventory';
import Itemprice from './pages/Itemprice';
import Orders from './pages/Orders';
import Report from './pages/Report';

function App() {
  return (
    <>
    <Header/> 
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
      <Route path="/itemprice" element={<Itemprice/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/report" element={<Report/>}/>
    </Routes>
    </>
  );
}

export default App;
