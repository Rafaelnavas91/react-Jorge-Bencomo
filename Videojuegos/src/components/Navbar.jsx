import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Cartwidget } from "./Cartwidget";

export const Navbar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">RIT</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Juegos</Nav.Link>
                        <Nav.Link href="#features">Consolas</Nav.Link>
                        <Nav.Link href="#pricing">Servicios</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                    <Cartwidget />
                </Container>
            </Navbar>
        </>)
}