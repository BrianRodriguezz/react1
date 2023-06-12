import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from "../CartWidget/CarWidget"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">RefereeShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Indumentaria</Nav.Link>
                    <Nav.Link href="#features">Accesorios</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                <CarWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar
