import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authsignup  from './pages/Signup';
import AuthLogin from './pages/Login';


function App() {
  return (
    <div className="h-full items-center">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthLogin/>} />
            <Route path="/signup" element={<Authsignup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
