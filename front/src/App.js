import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";


// Routing for page naviagtion
//restructure to ensure header and footer are always appearing
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/> 
    </Routes>
  );
}

export default App;
