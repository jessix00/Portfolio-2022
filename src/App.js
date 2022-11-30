import React from 'react';
import Projects from './components/Projects';
import Landing from './components/Landing';
import NotFound from './NotFound';
import { Route, Routes } from "react-router-dom";

function App(){
  return (
  <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="/Projects/:id" element={<Projects />}/>
    <Route path="*" element={<NotFound />}/>


  </Routes>
  )
}

export default App