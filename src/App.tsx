import React from 'react';
import styles from './App.module.scss'
import Contents from './components/Contents/Contents';
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Contents />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
