import React from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
     <div className='app'>
        <Navbar/>
          <AppRoutes />
      {!isHomePage && <Footer />}

     </div>
  );
}

export default App;