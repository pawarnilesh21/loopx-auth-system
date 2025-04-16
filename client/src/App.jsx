import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './Signup'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";

function App() {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/register" element={<Signup/>}  ></Route>
               <Route path="/login" element={<Login/>}  ></Route>
                <Route path="/home" element={<Home/>}  ></Route>
           </Routes>
       </BrowserRouter>
    );
}

export default App
