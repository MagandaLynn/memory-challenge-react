import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './app/components/Header';
import HomePage from './app/pages/HomePage';
import CreatePage from './app/pages/CreatePage';
import GamesPage from './app/pages/GamesPage';
import MemorizePage from './app/pages/MemorizePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CreatePage />
      <MemorizePage />
      <GamesPage />
    </div>
  );
}

export default App;
