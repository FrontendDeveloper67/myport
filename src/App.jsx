import React from 'react';
import Experties from './components/Experties/Experties';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import People from './components/People/People';  
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import css from './styles/App.module.scss';

const App = () => {
  // Don't forget to add the font link in index.html
  return (
    <div className={`bg-white ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Work/>
      <People/>    
      <Portfolio/>         
      <Footer/>
    </div>
  );
}

export default App;
