import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
// import Signin from '../../pages/Signin';
// import User from '../../pages/User';
// import Transactions from '../../pages/Transactions';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/P13-argentbank-OPC/"
        element={<Navigate replace to="/" />}
      />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/signin" component={Signin} />
        <Route path="/user" component={User} />
        <Route path="/transactions" component={Transactions} /> */}
    </Routes>
  );
}
