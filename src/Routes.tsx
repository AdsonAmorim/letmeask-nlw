import React from 'react';
import { Home } from './pages/Home';
import { CreateRoom } from './pages/CreateRoom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-room" element={<CreateRoom/>} />
      </Routes>
    </Router>
  );
}
