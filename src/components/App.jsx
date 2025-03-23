import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from './layout/Home';
import NextReadRecommendations from './NextReadRecommendations';
import WeeklyRecommendations from './WeeklyRecommendations';
import Pendings from '../components/pages/Pendings';
import Favorites from '../components/pages/Favorites';
import AccessPage from '../components/pages/AccessPage';

import '../styles/App.scss';

function App() {

  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <>
      <Header

        isNavVisible={isNavVisible}
        setIsNavVisible={setIsNavVisible}

      />

      <main className="home">

        <Routes>

          <Route path="/" element={
            <>
              <Home />
              <NextReadRecommendations />
              <WeeklyRecommendations />
            </>
          } />
          <Route path="/" element={<Home />} />
          <Route path="/pendientes" element={<Pendings />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/acceso" element={<AccessPage />} />
          <Route path="*" element={<p>404 - Página no encontrada</p>} />
        </Routes>

      </main>

      <Footer />
    </>
  )
}

export default App;
