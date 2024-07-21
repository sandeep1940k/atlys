import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Post from './pages/Post';
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="post" element={<Post />} >
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
