import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CarGrid from './components/CarGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <CarGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;