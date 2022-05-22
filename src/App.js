import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "./components/Header/NavigationBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";



function App() {
  let [user, changeOutState] = useState(false)

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('user'))
    if (userData) { changeOutState(user => userData) }
  }, [])

  return (

    <div id="container">
      <Navigation user={user} />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login changeOutState={changeOutState} />}></Route>
          <Route path="/register" element={<Register changeOutState={changeOutState} />}></Route>
          <Route path="/details/pet/:id" element={<Details user={user} />}></Route>
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>

  );
}

export default App;
