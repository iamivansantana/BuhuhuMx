import React from 'react';
import Body from './components/Body';
import Header from './components/Header';


function App() {
  
  window.addEventListener("load", function(event) {
    const loader = document.querySelector(".loader");
    loader.className +=" hiden"; //Agrega la clase "loader hiden"
  });

  return (
    <>
    <div className="loader">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
    
      <Header />
      <Body />
    
    </>
  );
}

export default App;
