import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Select from './pages/Select';
import Schedule from './pages/Schedule';
import Address from './pages/Address';
import Result from './pages/Result';
import Submit from './pages/Submit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/care/select" element={<Select />} />
        <Route path="/care/schedule" element={<Schedule />} />
        <Route path="/care/address" element={<Address />} />
        <Route path="/care/result" element={<Result />} />
        <Route path="/care/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
