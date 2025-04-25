import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './index.css'
import { AppContextProvider } from '../../vite-frontend/src/context/AppContext';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
   <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </AppContextProvider>
  </StrictMode>,
)
