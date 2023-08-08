import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Landing from "./components/Landing";
import Landing2 from "./components/Landing2";
import Landing3 from "./components/Landing3";
import Home from "./components/Home";
import Courses from "./components/Courses";
import UserLevels from './components/UserLevels';

// import Landing2 from "./components/Landing2";
// const dotenv = require('dotenv');
// dotenv.config(
//   {
//       path: '/.env'
//   }
// );

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
<Route path="/Landing1" element={<Landing />} />
<Route path="/Landing2" element={<Landing2 />} />
<Route path="/Landing3" element={<Landing3 />} />
<Route path="/Courses" element={<Courses />} />
<Route path="/UserLevels" element={<UserLevels/>} />
<Route path= "/" element={<Home/>} />
</Routes>
    
    </BrowserRouter>
  )

}

export default App;
