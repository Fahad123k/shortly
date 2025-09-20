import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import { ApiProvider } from './contexts/ApiContext';
import Header from './components/Header';
import Dashbaord from './pages/Dashboard';
import Footer from './components/Footer';
import Analytics from './pages/Analytics';
import AuthPage from './pages/AuthPage';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import AllUrls from './pages/AllUrl';

function App() {

  return (
    <ApiProvider>


      <BrowserRouter future={{ v7_startTransition: true }}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashbaord />} />
          <Route path="/allurl" element={<AllUrls />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/sign" element={<AuthPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<h5>Page not found 404</h5>} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </ApiProvider>

  )
}

export default App
