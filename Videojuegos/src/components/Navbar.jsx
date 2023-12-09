import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Cartwidget} from "./Cartwidget";



export const NavBar = () =>{
    return( <Navbar  bg="dark" data-bs-theme="dark">
    <Container >
      <Navbar.Brand style={{fontSize:"40px", color:"bisque"} }  href="#home">RIT</Navbar.Brand>
      <Nav style={{ gap:"280px"} }  >
      <NavLink style={{ color:"bisque"} }  to="/">HOME</NavLink>
        <NavLink  style={{ color:"bisque"} } to="category/mitologia">MITOLOGIA</NavLink>
        <NavLink  style={{ color:"bisque"} } to="category/deportes">DEPORTES</NavLink>

        <NavLink  style={{ color:"bisque"} } to="category/superheroes">SUPERHEROES</NavLink>
      </Nav>
    </Container>
    <Cartwidget/>
  </Navbar>)
}