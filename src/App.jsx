import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardNext from './Components/CardNext.jsx'
import Layout from './Components/Layout.jsx'
import CardBuy from './Components/CardBuy.jsx';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Layout/>}> </Route>
        <Route path="/Card/:id" element={<CardNext />}></Route>
        <Route path="/Buy" element={<CardBuy />}></Route>
        
        
        </Routes>
      </BrowserRouter>
      
       
    </>
  )
}

export default App