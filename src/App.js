import { Route, Routes, } from "react-router-dom";
import { useState, useEffect } from "react";

import OuthContext from "./contexts/OuthContext";


import Navigation from "./components/Header/NavigationBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Logout from "./components/Logout/Logout";
import AddPet from "./components/Add-Pet/AddPet";
import Edit from "./components/Edit/Edit";


function App() {
  let [user, changeOutState] = useState(false)


  return (
   < OuthContext.Provider value={changeOutState}>
    <div id="container">
      <Navigation user={user} />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/details/pet/:id/*" element={<Details user={user} />}></Route>
          <Route path="/edit/pet/:id" element={<Edit user={user}/>}></Route>
          <Route path="/add-pet" element={<AddPet user={user}/>}></Route>
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
    </ OuthContext.Provider>
  );
}

export default App;
