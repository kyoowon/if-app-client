import React from 'react';
import styles from './App.module.scss'
import Contents from './features/Contents/Contents';
import Login from './features/Login/Login'
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
