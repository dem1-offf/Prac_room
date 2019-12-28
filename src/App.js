import React from 'react';

import Header from './File/Header.jsx';
import Sidebar from './File/Sidebar.jsx';
import Contents from './File/Contents.jsx';
// import Footer from './File/Footer.js';
import './style/App.css';


const App = () => {
  return (  
    
    <div className="app-wrapper">
      <Header />
      <Sidebar />
    
      <Contents />



    </div> 
  );
}





export default App;
 