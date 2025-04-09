import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MangaList from './components/MangaList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <MangaList />  
          <Pagination />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;