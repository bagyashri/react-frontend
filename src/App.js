
import Screen from './components/Screen';

// import Signup1 from './components/Signup1';
import Signup from './components/Signup';
import Work from './components/Work';
import User from './components/User';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Accordions';


function App() {
  return (
    <BrowserRouter>
    <Routes>
  
      <Route path="/screen" element={<Screen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/WORK" element={<Work/>} />
      <Route path="/user" element={<User />} />
      <Route path="/home" element={<Home />} />
   
    </Routes>
  </BrowserRouter>
 




    

  );
}

export default App;
