import React from 'react';
import './App.css';
import Header from './app/components/Header';
import HomePage from './app/pages/HomePage';
import CreatePage from './app/pages/CreatePage';
import GamesPage from './app/pages/GamesPage';
import MemorizePage from './app/pages/MemorizePage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='create' element={<CreatePage />} />
        <Route path='memorize' element={<MemorizePage />} />
        <Route path='games' element={<GamesPage />} />
      </Routes>
    </div>
  );
}

export default App;
