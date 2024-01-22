import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {store} from "./app/store.js"
import { Provider} from "react-redux"
import { configureStore } from '@reduxjs/toolkit';
import playersReducer from "./features/playerSlice.js"


const playerForm = configureStore({ reducer: { players: playersReducer } });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <Provider store={store}>
      <App />
    </Provider>
    {/* Browser Router keeps tracks of routes and links in our website */}
    </BrowserRouter>
  </React.StrictMode>
)
