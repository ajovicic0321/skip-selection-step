import React from 'react';
import SkipSelection from './components/SkipSelection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SkipSelection />
      </main>
      <Footer />
    </div>
  );
}

export default App; 