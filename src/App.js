import React from 'react';
import Projects from './components/Projects';
import Landing from './components/Landing';
import NotFound from './NotFound';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


function App(){
  const location = useLocation();
  return (
    <AnimatePresence exit>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing />}/>
      <Route path="/Projects/:id" element={<Projects />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </AnimatePresence>
  )
}

export default App