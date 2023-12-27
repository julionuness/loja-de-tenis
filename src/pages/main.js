import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Register from "./register";
import Products from "./products";
import Adifom from "./shop/adifom_q";
import Lebron from "./shop/lebron_nxt";
import SK8 from "./shop/sk8_hi";
import AirJordan from "./shop/air_jordan_low";
import Airmax from "./shop/airmax_90";
import Dogg from "./shop/doggfather";
import Rise from "./shop/rise_nitro";
import Trae from "./shop/trae_unlimited";
import Ultra from "./shop/ultrarange";
import Pikachu from "./shop/pikachu";


const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/adifom_q" element={<Adifom/>}/>
    <Route exact path="/lebron_nxt" element={<Lebron/>}/>
    <Route exact path="/sk8_hi" element={<SK8/>}/>
    <Route exact path="/air_jordan_low" element={<AirJordan/>}/>
    <Route exact path="/sk8_hi" element={<SK8/>}/>
    <Route exact path="/airmax_90" element={<Airmax/>}/>
    <Route exact path="/doggfather" element={<Dogg/>}/>
    <Route exact path="/rise_nitro" element={<Rise/>}/>
    <Route exact path="/trae_unlimited" element={<Trae/>}/>
    <Route exact path="/ultrarange" element={<Ultra/>}/>
    <Route exact path="/pikachu" element={<Pikachu/>}/>
  </Routes>
)

export default Main;