import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from './layout/Main';
import Recommendations from './Recommendations';
import Novelties from './Novelties';

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

        <Main />
        <Recommendations />
        <Novelties />

      </main>

      <Footer />
    </>
  )
}

export default App;
