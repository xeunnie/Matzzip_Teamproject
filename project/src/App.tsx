import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, useNavigate} from 'react-router-dom';
// import { PATH } from '../constants/route';
import Home from './pages/Home';
import Map from './pages/Map';
import Search from './pages/Search';
import Record from './pages/Record';

export default function App() {
  let navigate= useNavigate()
  return (
    <div>
      <Navbar>
        <Navbar.Brand href='/'>home</Navbar.Brand>
        <Container>
          <Nav>
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>rollback</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/map')}}>map</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/search')}}>search</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/record')}}>record</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/record' element={<Record/>}/>
      </Routes>
    </div>
  );
}
