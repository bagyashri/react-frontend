
import Screen from './components/Screen';

// import Signup1 from './components/Signup1';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
  
      <Route path="/screen" element={<Screen />} />
      <Route path="/signup" element={<Signup />} />
   
    </Routes>
  </BrowserRouter>
 




    

  );
}

export default App;
