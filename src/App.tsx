import React from "react";
import { Routes } from './routes'; 
import { GlobalStyles, AppContainer } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from "react-router-dom";
import { Header } from './components/templates';
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <ToastContainer autoClose={3000}/>
        <Header />
        <AppContainer>
          <Routes />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
