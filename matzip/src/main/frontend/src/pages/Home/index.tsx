import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import BottomMenu from "../../components/bottomMenu";

export default function Home() {
    let navigate= useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <p>일단 공용페이지로 나눠놓음</p>
        <Navbar>
          <Container>
            <Nav>
              <Nav.Link onClick={()=>{navigate(-1)}}>rollback</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <BottomMenu></BottomMenu>


    </div>
  );
}
