import React, {Suspense, lazy} from 'react';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Mapa from './Components/Mapa';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

import './App.css';
const Productos = lazy(()=>import('./Components/Productos'))

library.add(fas);

function App() {
  const [loading, setLoading] = useState(false);
  useEffect (() => {
    setLoading(true)
    setInterval(()=>{
      setLoading(false)
    },5000)
  },[])
  return (

      <div className="App">
        {
          loading ? 
          <div className="PacmanLoader-container">
            <PacmanLoader color={'#3d2514'} loading={loading} size={100} />
          </div>
          :
          <>
          <Navbar/>
          <Inicio/>
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Productos/>
          </Suspense>
          <Nosotros/>
          <Mapa/>
          <ContactUs/>
          <Footer/>
          </>
        }
      </div>
      
  );
}

export default App;

