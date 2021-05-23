import React from "react";
import { Routes } from './routes'; 
import { GlobalStyles } from './styles/global'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={3000}/>
      <Routes />
    </>
  );
}

export default App;
