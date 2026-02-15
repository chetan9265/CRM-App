// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './component/layout';
// import Login from './component/Login';
import Dashboard from './Page/DashBoard';
import Leads from './Page/Leads';
import './App.css';
import Login from './Page/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return (
    <>
          <ToastContainer position="top-right" autoClose={3000} />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
            <Layout><Dashboard /></Layout> :
            <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/leads" 
          element={
            isAuthenticated ? 
            <Layout><Leads /></Layout> :
            <Navigate to="/login" />
          } 
        />
        
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;