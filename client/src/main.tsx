import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import './App.css'
import App from './App.tsx'
import { store } from './app/store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
