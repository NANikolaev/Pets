import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navigation from "./components/Header/NavigationBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";



function App() {
 

  return (

    <div id="container">
      <Navigation />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/details/pet/:id" element={<Details isLogged={user}/>}></Route>
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>

  );
}

export default App;
