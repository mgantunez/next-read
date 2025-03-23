import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from './layout/Home';
import NextReadRecommendations from './NextReadRecommendations';
import WeeklyRecommendations from './WeeklyRecommendations';

import '../styles/App.scss';

function App() {

  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <>
      <Header

        isNavVisible={isNavVisible}
        setIsNavVisible={setIsNavVisible}

      />

      <main className="main">

        <Home />
        <NextReadRecommendations />
        <WeeklyRecommendations />

      </main>

      <Footer />
    </>
  )
}

export default App;
