import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Search from './pages/Search';
import Record from './pages/Record';

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/record' element={<Record/>}/>
      </Routes>
    </div>
  );
}
