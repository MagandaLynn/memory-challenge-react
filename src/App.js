import React from 'react';
import './App.css';
import Header from './app/components/Header';
import HomePage from './app/pages/HomePage';
import CreatePage from './app/pages/CreatePage';
import GamesPage from './app/pages/GamesPage';
import MemorizePage from './app/pages/MemorizePage';
import {Routes, Route} from 'react-router-dom';
import { fetchUsers, selectCurrentUser } from './features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './app/pages/LoginPage';
import CreateMemoryPalace from './features/create/CreateMemoryPalace';
import CreateLists from './features/create/CreateLists';
import CreateNumbers from './features/create/CreateNumbers';
import CreatePAO from './features/create/CreatePAO';
import MemorizeMemoryPalace from './features/memorize/MemorizeMemoryPalace';
import MemorizeLists from './features/memorize/MemorizeLists'
import MemorizeNumbers from './features/memorize/MemorizeNumbers'
import MemorizePAO from './features/memorize/MemorizePAO';

function App() {
  const dispatch=useDispatch();
  dispatch(fetchUsers());

  const currentUser=useSelector(selectCurrentUser);
  
  if(!currentUser){
    return (<div>
        <LoginPage />
    </div>)
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='create' element={<CreatePage />} />
        <Route path='create/palace' element={<CreateMemoryPalace />} />
        <Route path='create/lists' element={<CreateLists />} />
        <Route path='create/numbers' element={<CreateNumbers />} />
        <Route path='create/pao' element={<CreatePAO />} />
        <Route path='memorize' element={<MemorizePage />} />
        
        <Route path='memorize/palace' element={<MemorizeMemoryPalace />} />
        <Route path='memorize/lists' element={<MemorizeLists />} />
        <Route path='memorize/numbers' element={<MemorizeNumbers />} />
        <Route path='memorize/pao' element={<MemorizePAO />} />
        <Route path='games' element={<GamesPage />} />
      </Routes>
    </div>
  );
}

export default App;
