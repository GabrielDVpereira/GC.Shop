import React from "react";
import { Routes } from './routes'; 
import { GlobalStyles, AppContainer } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from "react-router-dom";
import { Header } from './components/templates'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer autoClose={3000}/>
      <Header />
      <AppContainer>
        <Routes />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
