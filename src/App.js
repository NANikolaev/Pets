import Navigation from "./components/Header/NavigationBar";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
  
    <div id="container">
      <Navigation/>
    <main id="site-content">
       <Routes>
         
       </Routes>
    </main>

    <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
    
  );
}

export default App;
