import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from './layout/Main';
import Novelties from './Novelties';

import '../styles/App.scss';

function App() {
  return (
    <Header />

    <main className="main">

<Main />
<Novelties />

    </main>

    <Footer />
  )
}

export default App;
