import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Mapa from './Components/Mapa';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import BounceLoader from "react-spinners/BounceLoader";

import './App.css';

const Productos = lazy(() => import('./Components/Productos'))

library.add(fas);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="BounceLoader-container">
          <BounceLoader color={'#d6d6d6'} loading={loading} size={250} />
        </div>
      ) : (
        <>
          <Navbar />
          <Inicio />
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Productos />
          </Suspense>
          <Nosotros />
          <Mapa />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

